import { List, type ListRowRenderer } from "react-virtualized";

import { useItemCountContext } from "~/context/ItemCountContext";
import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_HEAVY_ROW_HEIGHT,
} from "~/constants";
import { HeavyRow } from "../components/HeavyRow";

const rowRenderer: ListRowRenderer = ({ key, index, style, isScrolling }) => (
  <HeavyRow
    isScrolling={isScrolling}
    key={key}
    rowNumber={index + 1}
    style={style}
    virtualizer="virtualized"
  />
);

export const VirtualizedHeavy = () => {
  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler
      profilerId="react-virtualized--heavy"
      title="React Virtualized"
    >
      <List
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        overscanRowCount={OVERSCAN_COUNT}
        rowCount={itemCount}
        rowHeight={VIRTUALIZED_HEAVY_ROW_HEIGHT}
        rowRenderer={rowRenderer}
        style={{ borderRadius: "3px" }}
        width={VIRTUALIZED_CONTAINER_WIDTH}
      />
    </MountProfiler>
  );
};
