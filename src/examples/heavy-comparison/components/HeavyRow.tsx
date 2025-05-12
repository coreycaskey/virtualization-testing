import { VolumeUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { type CSSProperties, type ReactNode } from "react";

import { PURPLE_100, VIRTUALIZED_HEAVY_ROW_HEIGHT, WHITE } from "~/constants";
import { fetchPokemon } from "../utils/fetchPokemon";
import { PokemonTypeTag } from "./PokemonTypeTag";

interface HeavyRowProps {
  isScrolling: boolean; // indicator to prevent query spamming of pokemon api
  rowNumber: number;
  style: CSSProperties;
  virtualizer: string; // differentiates cache keys for each virtualization approach
}

// Note: Typically this type of query would be lifted outside the virtualized row
// and performed at the top-level to fetch data in batches, and fetch later records
// in a paginated pattern, but it was done this way on purpose to simulate a computationally
// heavy row
export const HeavyRow = ({
  isScrolling,
  rowNumber,
  style,
  virtualizer,
}: HeavyRowProps) => {
  const { data, isLoading } = useQuery({
    enabled: !isScrolling,
    queryFn: () => fetchPokemon(rowNumber),
    queryKey: [virtualizer, "pokemon", rowNumber],
  });

  let content: ReactNode;

  if (data) {
    content = (
      <Stack direction="row" alignItems="center" gap="4px" width="100%">
        <Avatar
          alt={data.name}
          src={data.sprites.front_default}
          sx={{ width: "40px", height: "40px" }}
        />

        <Stack justifyContent="space-between" alignItems="flex-start" flex={1}>
          <Typography variant="caption">{data.name.toUpperCase()}</Typography>

          <Stack direction="row" gap="4px">
            {Object.values(data.types).map(({ type }) => (
              <PokemonTypeTag key={type.name} type={type.name} />
            ))}
          </Stack>
        </Stack>

        <Box display="flex" height="fit-content">
          <IconButton
            aria-label="play-pokemon-audio"
            onClick={() => {
              const audio = new Audio(data.cries.latest ?? data.cries.legacy);

              audio.volume = 0.2;
              void audio.play();
            }}
            size="small"
          >
            <VolumeUp fontSize="inherit" />
          </IconButton>
        </Box>
      </Stack>
    );
  } else if (isLoading || isScrolling) {
    content = <CircularProgress size={VIRTUALIZED_HEAVY_ROW_HEIGHT * 0.6} />;
  } else {
    content = (
      <Typography variant="overline">Error: Pokemon {rowNumber}</Typography>
    );
  }

  return (
    <Box
      alignItems="center"
      boxSizing="border-box"
      display="flex"
      height={VIRTUALIZED_HEAVY_ROW_HEIGHT}
      justifyContent="center"
      padding="5px"
      sx={{
        backgroundColor: rowNumber % 2 === 0 ? PURPLE_100 : WHITE,
        ...style,
      }}
    >
      {content}
    </Box>
  );
};
