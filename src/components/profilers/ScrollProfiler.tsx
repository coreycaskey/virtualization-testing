import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
// TODO:
// eslint-disable-next-line import/named
import { usePrevious } from "@uidotdev/usehooks";
import {
  Profiler,
  useEffect,
  type PropsWithChildren,
  type RefObject,
} from "react";

import { type ProfilerTracker } from "~/types";

interface ScrollProfilerProps extends PropsWithChildren {
  avgScroll: number;
  cardTitle: string;
  isScrolling: boolean;
  onUpdateProfilerTracker: (updates: Partial<ProfilerTracker>) => void;
  profilerId: string;
  profilerTracker: RefObject<ProfilerTracker>;
  setAvgScroll: (avgScroll: number) => void;
  setTotalUpdates: (totalUpdates: number) => void;
  totalUpdates: number;
}

export const ScrollProfiler = ({
  avgScroll,
  cardTitle,
  children,
  isScrolling,
  onUpdateProfilerTracker,
  profilerId,
  profilerTracker,
  setAvgScroll,
  setTotalUpdates,
  totalUpdates,
}: ScrollProfilerProps) => {
  const prevIsScrolling = usePrevious(isScrolling);

  useEffect(() => {
    const { numUpdates, totalTime } = profilerTracker.current;

    if (!isScrolling && prevIsScrolling) {
      // handle potential divide by 0
      setAvgScroll(totalTime / (numUpdates || 1));
      setTotalUpdates(numUpdates);
    }
  }, [
    isScrolling,
    prevIsScrolling,
    profilerTracker,
    setAvgScroll,
    setTotalUpdates,
  ]);

  return (
    <Card>
      <CardContent>
        <Stack alignItems="center" gap={1} marginBottom={2}>
          <Typography variant="h5">{cardTitle}</Typography>

          <Typography variant="body2" color="text.secondary">
            Total Render Updates:{" "}
            <span style={{ fontWeight: "bold" }}>{totalUpdates}</span>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Update Avg:{" "}
            <span
              style={{ fontWeight: "bold" }}
            >{`${avgScroll.toFixed(4)} ms`}</span>
          </Typography>
        </Stack>

        <Profiler
          id={profilerId}
          onRender={(_, phase, actualDuration) => {
            if (phase === "update" && isScrolling) {
              onUpdateProfilerTracker({
                numUpdates: profilerTracker.current.numUpdates + 1,
                totalTime: profilerTracker.current.totalTime + actualDuration,
              });
            }
          }}
        >
          <Box
            display="flex"
            sx={{ border: "1px solid lightgray", borderRadius: "4px" }}
          >
            {children}
          </Box>
        </Profiler>
      </CardContent>
    </Card>
  );
};
