import { FC } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';

import { MountProfiler } from '~/components/profilers/MountProfiler';
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
} from '~/constants';
import { VariableRow } from '../components/VariableRow';

const rowRenderer: ListRowRenderer = ({ key, index, style }) => (
  <VariableRow key={key} rowNumber={index + 1} style={style} />
);

interface VirtualizedVariableProps {
  rowHeights: number[];
}

export const VirtualizedVariable: FC<VirtualizedVariableProps> = ({
  rowHeights,
}) => (
  <MountProfiler
    profilerId="react-virtualized--variable"
    title="React Virtualized"
  >
    <List
      height={VIRTUALIZED_CONTAINER_HEIGHT}
      overscanRowCount={OVERSCAN_COUNT}
      rowCount={rowHeights.length}
      rowHeight={({ index }) => rowHeights[index]}
      rowRenderer={rowRenderer}
      style={{ borderRadius: '3px' }}
      width={VIRTUALIZED_CONTAINER_WIDTH}
    />
  </MountProfiler>
);
