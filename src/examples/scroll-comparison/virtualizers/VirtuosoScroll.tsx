import { useRef, useState } from "react";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";

import { useItemCountContext } from "~/context/ItemCountContext";
import {
  COUNT_SIMPLE_ROWS_SHOWN,
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { ScrollContainer } from "../components/ScrollContainer";
import { ScrollRow } from "../components/ScrollRow";
import { animate } from "../utils/animate";

const rowRenderer = (index: number) => (
  <ScrollRow
    rowNumber={index + 1}
    style={{
      height: VIRTUALIZED_SIMPLE_ROW_HEIGHT,
      margin: 0,
    }}
  />
);

export const VirtuosoScroll = () => {
  const { itemCount } = useItemCountContext();

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const listRef = useRef<VirtuosoHandle | null>(null);

  return (
    <ScrollContainer
      cardTitle="React Virtuoso"
      isScrolling={isScrolling}
      onReset={() => {
        // reset to top with no animation
        setScrollTop(0);
        listRef.current?.scrollTo({ top: 0 });
      }}
      onStartScroll={() => {
        /*
          The `Virtuoso` component has an `isScrolling` prop that triggers a callback,
          but I forewent it in favor of a state-based approach because the `isScrolling`
          prop was being triggered multipled times instead of once, as desired
        */
        setIsScrolling(true);
        animate(
          scrollTop,
          (itemCount - COUNT_SIMPLE_ROWS_SHOWN) * VIRTUALIZED_SIMPLE_ROW_HEIGHT,
          (interpolated) => {
            setScrollTop(interpolated);
            listRef.current?.scrollTo({ top: interpolated });
          },
          () => setIsScrolling(false),
        );
      }}
      profilerId="react-virtuoso--scroll"
    >
      <Virtuoso
        itemContent={rowRenderer}
        // overscan is based on pixels rather than count
        overscan={VIRTUALIZED_SIMPLE_ROW_HEIGHT * OVERSCAN_COUNT}
        ref={listRef}
        style={{
          borderRadius: "3px",
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          overflowY: "hidden", // prevent user scroll but allow programmatic scroll
          width: VIRTUALIZED_CONTAINER_WIDTH,
        }}
        totalCount={itemCount}
      />
    </ScrollContainer>
  );
};
