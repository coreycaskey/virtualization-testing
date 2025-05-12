import { Stack } from "@mui/material";
import { type PropsWithChildren, useRef, useState } from "react";

import { ScrollProfiler } from "~/components/profilers/ScrollProfiler";
import { type ProfilerTracker } from "~/types";
import { ButtonContainer } from "./ButtonContainer";

const INITIAL_PROFILER_TRACKER: ProfilerTracker = {
  numUpdates: 0,
  totalTime: 0,
};

interface ScrollContainerProps extends PropsWithChildren {
  cardTitle: string;
  isScrolling: boolean;
  onReset: () => void;
  onStartScroll: () => void;
  profilerId: string;
}

export const ScrollContainer = ({
  cardTitle,
  children,
  isScrolling,
  onReset,
  onStartScroll,
  profilerId,
}: ScrollContainerProps) => {
  const [avgScroll, setAvgScroll] = useState(0);

  const profilerTracker = useRef(INITIAL_PROFILER_TRACKER);

  const handleUpdateProfilerTracker = (updates: Partial<ProfilerTracker>) => {
    profilerTracker.current = {
      ...profilerTracker.current,
      ...updates,
    };
  };

  return (
    <Stack gap={2}>
      <ScrollProfiler
        avgScroll={avgScroll}
        cardTitle={cardTitle}
        isScrolling={isScrolling}
        profilerId={profilerId}
        profilerTracker={profilerTracker}
        onUpdateProfilerTracker={handleUpdateProfilerTracker}
        setAvgScroll={setAvgScroll}
      >
        {children}
      </ScrollProfiler>

      <ButtonContainer
        onReset={() => {
          onReset();
          setAvgScroll(0);
          profilerTracker.current = INITIAL_PROFILER_TRACKER;
        }}
        onStartScroll={onStartScroll}
      />
    </Stack>
  );
};
