import { Stack } from "@mui/material";

import { TanstackScroll } from "./virtualizers/TanstackScroll";
import { VirtualizedScroll } from "./virtualizers/VirtualizedScroll";
import { VirtuosoScroll } from "./virtualizers/VirtuosoScroll";
import { WindowScroll } from "./virtualizers/WindowScroll";

export const ScrollComparison = () => (
  <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
    <VirtualizedScroll />
    <WindowScroll />
    <TanstackScroll />
    <VirtuosoScroll />
  </Stack>
);
