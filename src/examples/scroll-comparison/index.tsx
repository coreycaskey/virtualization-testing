import { FC } from 'react';
import { Stack } from '@mui/material';

import { TanstackScroll } from './virtualizers/TanstackScroll';
import { VirtualizedScroll } from './virtualizers/VirtualizedScroll';
import { VirtuosoScroll } from './virtualizers/VirtuosoScroll';
import { WindowScroll } from './virtualizers/WindowScroll';

interface ScrollComparisonProps {}

export const ScrollComparison: FC<ScrollComparisonProps> = () => (
  <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
    <VirtualizedScroll />
    <WindowScroll />
    <TanstackScroll />
    <VirtuosoScroll />
  </Stack>
);
