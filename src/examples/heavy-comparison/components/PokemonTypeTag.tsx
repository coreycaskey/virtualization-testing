import { Box, Typography } from "@mui/material";

import { type PokemonType, POKEMON_TYPE_COLORS } from "../types";

interface PokemonTypeTagProps {
  type: PokemonType;
}

export const PokemonTypeTag = ({ type }: PokemonTypeTagProps) => {
  return (
    <Box
      alignItems="center"
      borderRadius="4px"
      display="flex"
      justifyContent="center"
      padding="2px"
      sx={{ backgroundColor: POKEMON_TYPE_COLORS[type] }}
    >
      <Typography variant="caption">{type.toUpperCase()}</Typography>
    </Box>
  );
};
