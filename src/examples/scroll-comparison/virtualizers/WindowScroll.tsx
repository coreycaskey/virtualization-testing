import { useRef, useState } from "react";
import { FixedSizeList } from "react-window";

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

export const WindowScroll = () => {
  const { itemCount } = useItemCountContext();

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const listRef = useRef<FixedSizeList | null>(null);

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
        style={{ borderRadius: "3px", overflowY: "hidden" }} // prevent user scroll but allow programmatic scroll
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        {({ index, style }) => (
          <ScrollRow rowNumber={index + 1} style={style} />
        )}
      </FixedSizeList>
    </ScrollContainer>
  );
};
