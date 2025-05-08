import { Stack } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TanstackHeavy } from "./virtualizers/TanstackHeavy";
import { VirtualizedHeavy } from "./virtualizers/VirtualizedHeavy";
import { VirtuosoHeavy } from "./virtualizers/VirtuosoHeavy";
import { WindowHeavy } from "./virtualizers/WindowHeavy";

const queryClient = new QueryClient();

export const HeavyComparison = () => (
  <QueryClientProvider client={queryClient}>
    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
      <VirtualizedHeavy />
      <WindowHeavy />
      <TanstackHeavy />
      <VirtuosoHeavy />
    </Stack>
  </QueryClientProvider>
);
