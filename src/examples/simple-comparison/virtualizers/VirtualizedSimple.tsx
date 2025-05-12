import { List, type ListRowRenderer } from "react-virtualized";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from "~/constants";
import { useItemCountContext } from "~/context/ItemCountContext";
import { SimpleRow } from "../components/SimpleRow";

const rowRenderer: ListRowRenderer = ({ key, index, style }) => (
  <SimpleRow key={key} rowNumber={index + 1} style={style} />
);

export const VirtualizedSimple = () => {
  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler
      profilerId="react-virtualized--simple"
      title="React Virtualized"
    >
      <List
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        overscanRowCount={OVERSCAN_COUNT}
        rowCount={itemCount}
        rowHeight={VIRTUALIZED_SIMPLE_ROW_HEIGHT}
        rowRenderer={rowRenderer}
        style={{ borderRadius: "3px" }}
        width={VIRTUALIZED_CONTAINER_WIDTH}
      />
    </MountProfiler>
  );
};
