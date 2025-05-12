import { useState } from "react";
import { Virtuoso } from "react-virtuoso";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_HEAVY_ROW_HEIGHT,
} from "~/constants";
import { useItemCountContext } from "~/context/ItemCountContext";
import { HeavyRow } from "../components/HeavyRow";

const rowRenderer = (isScrolling: boolean) => (index: number) => (
  <HeavyRow
    isScrolling={isScrolling}
    rowNumber={index + 1}
    style={{ height: VIRTUALIZED_HEAVY_ROW_HEIGHT, margin: 0 }}
    virtualizer="virtuoso"
  />
);

export const VirtuosoHeavy = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler profilerId="react-virtuoso--heavy" title="React Virtuoso">
      <Virtuoso
        isScrolling={setIsScrolling}
        itemContent={rowRenderer(isScrolling)}
        // overscan is based on pixels rather than count
        overscan={OVERSCAN_COUNT * VIRTUALIZED_HEAVY_ROW_HEIGHT}
        style={{
          borderRadius: "3px",
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          width: VIRTUALIZED_CONTAINER_WIDTH,
        }}
        totalCount={itemCount}
      />
    </MountProfiler>
  );
};
