import { useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
} from "~/constants";
import { VariableRow } from "../components/VariableRow";

const rowRenderer = (rowHeights: number[]) => (index: number) => (
  <VariableRow
    rowNumber={index + 1}
    style={{ height: rowHeights[index], margin: 0 }}
  />
);

interface VirtuosoVariableProps {
  rowHeights: number[];
}

export const VirtuosoVariable = ({ rowHeights }: VirtuosoVariableProps) => {
  /*
    Since `Virtuoso` uses pixels for its `overscan` prop, I calculated the average
    row height to get an estimate to use as a multiple of `OVERSCAN_COUNT` since
    the row heights are variable
  */
  const avgRowHeight = useMemo(() => {
    const totalHeight = rowHeights.reduce((acc, nextHeight) => {
      acc += nextHeight;
      return acc;
    });

    return Math.round(totalHeight / rowHeights.length);
  }, [rowHeights]);

  return (
    <MountProfiler profilerId="react-virtuoso--variable" title="React Virtuoso">
      <Virtuoso
        itemContent={rowRenderer(rowHeights)}
        // overscan is based on pixels rather than count
        overscan={OVERSCAN_COUNT * avgRowHeight}
        style={{
          borderRadius: "3px",
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          width: VIRTUALIZED_CONTAINER_WIDTH,
        }}
        totalCount={rowHeights.length}
      />
    </MountProfiler>
  );
};
