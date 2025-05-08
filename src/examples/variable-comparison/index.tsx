import { Stack } from "@mui/material";
import { useMemo } from "react";

import { useItemCountContext } from "~/context/ItemCountContext";
import { TanstackVariable } from "./virtualizers/TanstackVariable";
import { VirtualizedVariable } from "./virtualizers/VirtualizedVariable";
import { VirtuosoVariable } from "./virtualizers/VirtuosoVariable";
import { WindowVariable } from "./virtualizers/WindowVariable";

export const VariableComparison = () => {
  const { itemCount } = useItemCountContext();

  /*
    Keep the variable row heights consistent among virtualizers to remove
    that as a factor for performance differences
  */
  const rowHeights = useMemo(
    () =>
      new Array(itemCount)
        .fill(true)
        .map(() => 35 + Math.round(Math.random() * 100)),
    [itemCount],
  );

  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
      <VirtualizedVariable rowHeights={rowHeights} />
      <WindowVariable rowHeights={rowHeights} />
      <TanstackVariable rowHeights={rowHeights} />
      <VirtuosoVariable rowHeights={rowHeights} />
    </Stack>
  );
};
