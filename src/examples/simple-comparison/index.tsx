import { Stack } from "@mui/material";

import { TanstackSimple } from "./virtualizers/TanstackSimple";
import { VirtualizedSimple } from "./virtualizers/VirtualizedSimple";
import { VirtuosoSimple } from "./virtualizers/VirtuosoSimple";
import { WindowSimple } from "./virtualizers/WindowSimple";

export const SimpleComparison = () => (
  <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
    <VirtualizedSimple />
    <WindowSimple />
    <TanstackSimple />
    <VirtuosoSimple />
  </Stack>
);
