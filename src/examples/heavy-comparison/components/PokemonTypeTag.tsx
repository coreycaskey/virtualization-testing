import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { PokemonType, POKEMON_TYPE_COLORS } from '../types';

interface PokemonTypeTagProps {
  type: PokemonType;
}

export const PokemonTypeTag: FC<PokemonTypeTagProps> = ({ type }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="2px"
      borderRadius="4px"
      sx={{ backgroundColor: POKEMON_TYPE_COLORS[type] }}
    >
      <Typography variant="caption">{type.toUpperCase()}</Typography>
    </Box>
  );
};
