import { Box } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

import { useItemCountContext } from "~/context/ItemCountContext";
import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { SimpleRow } from "../components/SimpleRow";

export const TanstackSimple = () => {
  const { itemCount } = useItemCountContext();

  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => VIRTUALIZED_SIMPLE_ROW_HEIGHT,
    overscan: OVERSCAN_COUNT,
  });

  return (
    <MountProfiler
      profilerId="tanstack-virtual--simple"
      title="Tanstack Virtual"
    >
      <Box
        ref={parentRef}
        style={{
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          width: VIRTUALIZED_CONTAINER_WIDTH,
          overflow: "auto",
          borderRadius: "3px",
        }}
      >
        <Box
          style={{
            height: `${getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {getVirtualItems().map(({ index, key, size, start }) => (
            <SimpleRow
              key={key}
              rowNumber={index + 1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${size}px`,
                transform: `translateY(${start}px)`,
              }}
            />
          ))}
        </Box>
      </Box>
    </MountProfiler>
  );
};
