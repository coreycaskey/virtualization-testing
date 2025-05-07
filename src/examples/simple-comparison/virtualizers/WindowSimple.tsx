import { FC } from 'react';
import { FixedSizeList } from 'react-window';

import { useItemCountContext } from '~/providers/useItemCountContext';
import { MountProfiler } from '~/components/profilers/MountProfiler';
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
  VIRTUALIZED_SIMPLE_ROW_HEIGHT,
} from '~/constants';
import { SimpleRow } from '../components/SimpleRow';

interface WindowSimpleProps {}

export const WindowSimple: FC<WindowSimpleProps> = () => {
  const { itemCount } = useItemCountContext();

  return (
    <MountProfiler profilerId="react-window--simple" title="React Window">
      <FixedSizeList
        height={VIRTUALIZED_CONTAINER_HEIGHT}
        itemCount={itemCount}
        itemSize={VIRTUALIZED_SIMPLE_ROW_HEIGHT}
        overscanCount={OVERSCAN_COUNT}
        style={{ borderRadius: '3px' }}
        width={VIRTUALIZED_CONTAINER_WIDTH}
      >
        {({ index, style }) => (
          <SimpleRow rowNumber={index + 1} style={style} />
        )}
      </FixedSizeList>
    </MountProfiler>
  );
};
