import { Box, Typography } from '@mui/material';
import { CSSProperties, FC } from 'react';
import { PURPLE_100, WHITE } from '~/constants';

interface VariableRowProps {
  rowNumber: number;
  style: CSSProperties;
}

export const VariableRow: FC<VariableRowProps> = ({ rowNumber, style }) => (
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
