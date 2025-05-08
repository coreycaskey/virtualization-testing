import { VariableSizeList } from "react-window";

import { MountProfiler } from "~/components/profilers/MountProfiler";
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
} from "~/constants";
import { VariableRow } from "../components/VariableRow";

interface WindowVariableProps {
  rowHeights: number[];
}

export const WindowVariable = ({ rowHeights }: WindowVariableProps) => {
  return (
    <MountProfiler profilerId="react-window--variable" title="React Window">
      <VariableSizeList
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        itemCount={rowHeights.length}
        itemSize={(index) => rowHeights[index]}
        overscanCount={OVERSCAN_COUNT}
        style={{ borderRadius: "3px" }}
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        {({ index, style }) => (
          <VariableRow rowNumber={index + 1} style={style} />
        )}
      </VariableSizeList>
    </MountProfiler>
  );
};
