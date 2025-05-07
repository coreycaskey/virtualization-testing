import { FC } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { useItemCountContext } from '~/providers/useItemCountContext';
import { MountProfiler } from '~/components/profilers/MountProfiler';
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from '~/constants';
import { SimpleRow } from '../components/SimpleRow';

const rowRenderer = (index: number) => (
  <SimpleRow
    rowNumber={index + 1}
    style={{
      height: VIRTUALIZED_SIMPLE_ROW_HEIGHT,
      margin: 0,
    }}
  />
);

interface VirtuosoSimpleProps {}

export const VirtuosoSimple: FC<VirtuosoSimpleProps> = () => {
  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler profilerId="react-virtuoso--simple" title="React Virtuoso">
      <Virtuoso
        itemContent={rowRenderer}
        // overscan is based on pixels rather than count
        overscan={VIRTUALIZED_SIMPLE_ROW_HEIGHT * OVERSCAN_COUNT}
        style={{
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          width: VIRTUALIZED_CONTAINER_WIDTH,
          borderRadius: '3px',
        }}
        totalCount={itemCount}
      />
    </MountProfiler>
  );
};
