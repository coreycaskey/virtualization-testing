import { Box } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
} from "~/constants";
import { VariableRow } from "../components/VariableRow";

interface TanstackVariableProps {
  rowHeights: number[];
}

export const TanstackVariable = ({ rowHeights }: TanstackVariableProps) => {
  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: rowHeights.length,
    estimateSize: (i) => rowHeights[i],
    getScrollElement: () => parentRef.current,
    overscan: OVERSCAN_COUNT,
  });

  return (
    <MountProfiler
      profilerId="tanstack-virtual--variable"
      title="Tanstack Virtual"
    >
      <Box
        ref={parentRef}
        style={{
          borderRadius: "3px",
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          overflow: "auto",
          width: VIRTUALIZED_CONTAINER_WIDTH,
        }}
      >
        <Box
          style={{
            height: `${getTotalSize()}px`,
            position: "relative",
            width: "100%",
          }}
        >
          {getVirtualItems().map(({ index, key, size, start }) => (
            <VariableRow
              key={key}
              rowNumber={index + 1}
              style={{
                height: `${size}px`,
                left: 0,
                position: "absolute",
                top: 0,
                transform: `translateY(${start}px)`,
                width: "100%",
              }}
            />
          ))}
        </Box>
      </Box>
    </MountProfiler>
  );
};
