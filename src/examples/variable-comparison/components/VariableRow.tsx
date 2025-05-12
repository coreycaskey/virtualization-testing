import { Box, Typography } from "@mui/material";
import { type CSSProperties } from "react";

import { PURPLE_100, WHITE } from "~/constants";

interface VariableRowProps {
  rowNumber: number;
  style: CSSProperties;
}

export const VariableRow = ({ rowNumber, style }: VariableRowProps) => (
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
