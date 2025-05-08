import { Box, Typography } from "@mui/material";
import { type CSSProperties } from "react";
import { PURPLE_100, WHITE } from "~/constants";

interface SimpleRowProps {
  rowNumber: number;
  style: CSSProperties;
}

export const SimpleRow = ({ rowNumber, style }: SimpleRowProps) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      ...style,
      backgroundColor: rowNumber % 2 === 0 ? PURPLE_100 : WHITE,
    }}
  >
    <Typography variant="overline">List Item {rowNumber}</Typography>
  </Box>
);
