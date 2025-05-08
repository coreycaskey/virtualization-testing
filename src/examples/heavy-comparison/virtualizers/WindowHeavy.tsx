import { FixedSizeList } from "react-window";

import { useItemCountContext } from "~/context/ItemCountContext";
import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_HEAVY_ROW_HEIGHT,
} from "~/constants";
import { HeavyRow } from "../components/HeavyRow";

export const WindowHeavy = () => {
  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler profilerId="react-window--heavy" title="React Window">
      <FixedSizeList
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        itemCount={itemCount}
        itemSize={VIRTUALIZED_HEAVY_ROW_HEIGHT}
        overscanCount={OVERSCAN_COUNT}
        style={{ borderRadius: "3px" }}
        useIsScrolling
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        {({ index, style, isScrolling = false }) => (
          <HeavyRow
            isScrolling={isScrolling}
            rowNumber={index + 1}
            style={style}
            virtualizer="window"
          />
        )}
      </FixedSizeList>
    </MountProfiler>
  );
};
