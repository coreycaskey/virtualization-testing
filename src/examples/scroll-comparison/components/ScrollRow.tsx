import { Box, Typography } from "@mui/material";
import { type CSSProperties } from "react";

import { PURPLE_100, WHITE } from "~/constants";

interface ScrollRowProps {
  rowNumber: number;
  style: CSSProperties;
}

export const ScrollRow = ({ rowNumber, style }: ScrollRowProps) => (
  <Box
    alignItems="center"
    display="flex"
    justifyContent="center"
    sx={{
      backgroundColor: rowNumber % 2 === 0 ? PURPLE_100 : WHITE,
      ...style,
    }}
  >
    <Typography variant="overline">List Item {rowNumber}</Typography>
  </Box>
);
