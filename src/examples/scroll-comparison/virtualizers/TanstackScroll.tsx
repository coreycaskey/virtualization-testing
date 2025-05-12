import { Box } from "@mui/material";
import {
  type VirtualizerOptions,
  elementScroll,
  useVirtualizer,
} from "@tanstack/react-virtual";
import { useCallback, useRef, useState } from "react";

import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { useItemCountContext } from "~/context/ItemCountContext";
import { ScrollContainer } from "../components/ScrollContainer";
import { ScrollRow } from "../components/ScrollRow";
import { animate } from "../utils/animate";

export const TanstackScroll = () => {
  const { itemCount } = useItemCountContext();

  const [isScrolling, setIsScrolling] = useState(false);

  const parentRef = useRef<HTMLDivElement | null>(null);

  /*
    The `useVirtualizer` hook returns an `isScrolling` property, but I forewent it
    in favor of a state-based approach because the virtualizer's `isScrolling`
    property was updating multiple times instead of once, as desired
  */
  //  TODO:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToFn: VirtualizerOptions<any, any>["scrollToFn"] = useCallback(
    (offset, canSmooth, instance) => {
      animate(
        parentRef.current?.scrollTop ?? 0,
        offset,
        (interpolated) => elementScroll(interpolated, canSmooth, instance),
        () => setIsScrolling(false),
      );
    },
    [],
  );

  const { getTotalSize, getVirtualItems, scrollToIndex } = useVirtualizer({
    count: itemCount,
    estimateSize: () => VIRTUALIZED_SIMPLE_ROW_HEIGHT,
    getScrollElement: () => parentRef.current,
    overscan: OVERSCAN_COUNT,
    scrollToFn,
  });

  return (
    <ScrollContainer
      cardTitle="Tanstack Virtual"
      isScrolling={isScrolling}
      onReset={() => {
        // reset to top with no animation
        if (parentRef.current) {
          parentRef.current.scrollTop = 0;
        }
      }}
      onStartScroll={() => {
        setIsScrolling(true);
        scrollToIndex(itemCount - 1);
      }}
      profilerId="tanstack-virtual--scroll"
    >
      <Box
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        ref={parentRef}
        style={{
          borderRadius: "3px",
          overflow: "hidden", // prevent user scroll but allow programmatic scroll
        }}
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        <Box
          style={{
            height: `${getTotalSize()}px`,
            position: "relative",
            width: "100%",
          }}
        >
          {getVirtualItems().map(({ index, key, size, start }) => (
            <ScrollRow
              key={key}
              rowNumber={index + 1}
              style={{
                left: 0,
                height: `${size}px`,
                position: "absolute",
                top: 0,
                transform: `translateY(${start}px)`,
                width: "100%",
              }}
            />
          ))}
        </Box>
      </Box>
    </ScrollContainer>
  );
};
