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
}: ScrollProfilerProps) => {
  const prevIsScrolling = usePrevious(isScrolling);

  useEffect(() => {
    const { numUpdates, totalTime } = profilerTracker.current;

    if (!isScrolling && prevIsScrolling) {
      // handle potential divide by 0
      setAvgScroll(totalTime / (numUpdates || 1));
    }
  }, [isScrolling, prevIsScrolling, profilerTracker, setAvgScroll]);

  return (
    <Card>
      <CardContent>
        <Stack alignItems="center" gap={1} marginBottom={2}>
          <Typography variant="h5">{cardTitle}</Typography>

          <Typography variant="body2" color="text.secondary">
            Scroll Avg: {`${avgScroll.toFixed(4)} ms`}
          </Typography>
        </Stack>

        <Profiler
          id={profilerId}
          onRender={(_, phase, actualDuration) => {
            // TODO: verify this
            if (phase !== "mount" && isScrolling) {
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
