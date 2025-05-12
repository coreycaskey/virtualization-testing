import { Box } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { useItemCountContext } from "~/context/ItemCountContext";
import { SimpleRow } from "../components/SimpleRow";

export const TanstackSimple = () => {
  const { itemCount } = useItemCountContext();

  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => VIRTUALIZED_SIMPLE_ROW_HEIGHT,
    overscan: OVERSCAN_COUNT, // TODO: add an input for this
  });

  return (
    <MountProfiler
      profilerId="tanstack-virtual--simple"
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
            <SimpleRow
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
