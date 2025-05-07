import { Box } from '@mui/material';
import { useVirtualizer } from '@tanstack/react-virtual';
import { FC, useRef } from 'react';

import { MountProfiler } from '~/components/profilers/MountProfiler';
import {
  OVERSCAN_COUNT,
  VIRTUALIZED_CONTAINER_HEIGHT,
  VIRTUALIZED_CONTAINER_WIDTH,
} from '~/constants';
import { VariableRow } from '../components/VariableRow';

interface TanstackVariableProps {
  rowHeights: number[];
}

export const TanstackVariable: FC<TanstackVariableProps> = ({ rowHeights }) => {
  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: rowHeights.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i) => rowHeights[i],
    overscan: OVERSCAN_COUNT,
  });

  return (
    <MountProfiler
      profilerId="tanstack-virtual--variable"
      title="Tanstack Virtual"
    >
      <Box
        ref={parentRef}
        style={{
          height: VIRTUALIZED_CONTAINER_HEIGHT,
          width: VIRTUALIZED_CONTAINER_WIDTH,
          overflow: 'auto',
          borderRadius: '3px',
        }}
      >
        <Box
          style={{
            height: `${getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {getVirtualItems().map(({ index, key, size, start }) => (
            <VariableRow
              key={key}
              rowNumber={index + 1}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${size}px`,
                transform: `translateY(${start}px)`,
              }}
            />
          ))}
        </Box>
      </Box>
    </MountProfiler>
  );
};
