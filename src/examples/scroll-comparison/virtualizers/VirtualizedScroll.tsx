import { useState } from "react";
import { List, type ListRowRenderer } from "react-virtualized";

import {
  COUNT_SIMPLE_ROWS_SHOWN,
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { useItemCountContext } from "~/context/ItemCountContext";
import { ScrollContainer } from "../components/ScrollContainer";
import { ScrollRow } from "../components/ScrollRow";
import { animate } from "../utils/animate";

const rowRenderer: ListRowRenderer = ({ key, index, style }) => (
  <ScrollRow key={key} rowNumber={index + 1} style={style} />
);

export const VirtualizedScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const { itemCount } = useItemCountContext();

  return (
    <ScrollContainer
      cardTitle="React Virtualized"
      isScrolling={isScrolling}
      onReset={() => {
        // reset to top with no animation
        setScrollTop(0);
      }}
      onStartScroll={() => {
        setIsScrolling(true);
        animate(
          scrollTop,
          (itemCount - COUNT_SIMPLE_ROWS_SHOWN) * VIRTUALIZED_SIMPLE_ROW_HEIGHT,
          setScrollTop,
          () => setIsScrolling(false),
        );
      }}
      profilerId="react-virtualized--scroll"
    >
      <List
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        overscanRowCount={OVERSCAN_COUNT}
        rowHeight={VIRTUALIZED_SIMPLE_ROW_HEIGHT}
        rowCount={itemCount}
        rowRenderer={rowRenderer}
        scrollTop={scrollTop}
        style={{ overflowY: "hidden", borderRadius: "3px" }} // prevent user scroll but allow programmatic scroll
        width={VIRTUALIZED_CONTAINER_WIDTH}
      />
    </ScrollContainer>
  );
};
