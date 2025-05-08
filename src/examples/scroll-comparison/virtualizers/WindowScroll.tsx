import { useRef, useState } from "react";
import { FixedSizeList } from "react-window";

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

export const WindowScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const listRef = useRef<FixedSizeList | null>(null);

  const { itemCount } = useItemCountContext();

  return (
    <ScrollContainer
      cardTitle="React Window"
      isScrolling={isScrolling}
      onReset={() => {
        // reset to top with no animation
        setScrollTop(0);
        listRef.current?.scrollTo(0);
      }}
      onStartScroll={() => {
        setIsScrolling(true);
        animate(
          scrollTop,
          (itemCount - COUNT_SIMPLE_ROWS_SHOWN) * VIRTUALIZED_SIMPLE_ROW_HEIGHT,
          (interpolated) => {
            setScrollTop(interpolated);
            listRef.current?.scrollTo(interpolated);
          },
          () => setIsScrolling(false),
        );
      }}
      profilerId="react-window--scroll"
    >
      <FixedSizeList
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        itemCount={itemCount}
        itemSize={VIRTUALIZED_SIMPLE_ROW_HEIGHT}
        overscanCount={OVERSCAN_COUNT}
        ref={(list) => {
          listRef.current = list;
        }}
        style={{ overflowY: "hidden", borderRadius: "3px" }} // prevent user scroll but allow programmatic scroll
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        {({ index, style }) => (
          <ScrollRow rowNumber={index + 1} style={style} />
        )}
      </FixedSizeList>
    </ScrollContainer>
  );
};
