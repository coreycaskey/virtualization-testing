import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { Profiler, type PropsWithChildren, useState } from "react";

interface MountProfilerProps extends PropsWithChildren {
  profilerId: string;
  title: string;
}

export const MountProfiler = ({
  children,
  profilerId,
  title,
}: MountProfilerProps) => {
  const [time, setTime] = useState("");

  return (
    <Card>
      <CardContent>
        <Stack alignItems="center" gap={1} marginBottom={2}>
          <Typography variant="h5">{title}</Typography>

          <Typography variant="body2" color="text.secondary">
            Time: {time}
          </Typography>
        </Stack>

        <Profiler
          id={profilerId}
          onRender={(_, phase, actualDuration) => {
            // only care about mounting phase
            if (phase === "mount") {
              setTime(`${actualDuration.toFixed(4)} ms`);
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
