import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { CSSProperties, FC, ReactNode } from 'react';

import { PURPLE_100, VIRTUALIZED_HEAVY_ROW_HEIGHT, WHITE } from '~/constants';
import { fetchPokemon } from '../utils/fetchPokemon';
import { PokemonTypeTag } from './PokemonTypeTag';

interface HeavyRowProps {
  isScrolling: boolean; // indicator to prevent query spamming of pokemon api
  rowNumber: number;
  style: CSSProperties;
  virtualizer: string; // differentiates cache keys for each virtualization approach
}

export const HeavyRow: FC<HeavyRowProps> = ({
  isScrolling,
  rowNumber,
  style,
  virtualizer,
}) => {
  const { data, isLoading } = useQuery({
    queryKey: [virtualizer, 'pokemon', rowNumber],
    queryFn: () => fetchPokemon(rowNumber),
    enabled: !isScrolling,
  });

  let content: ReactNode;

  if (data) {
    content = (
      <Stack direction="row" alignItems="center" gap="4px" width="100%">
        <Avatar
          alt={data.name}
          src={data.sprites.front_default}
          sx={{ width: '40px', height: '40px' }}
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
              audio.play();
            }}
            size="small"
          >
            <VolumeUpIcon fontSize="inherit" />
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
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={VIRTUALIZED_HEAVY_ROW_HEIGHT}
      padding="5px"
      boxSizing="border-box"
      sx={{
        ...style,
        backgroundColor: rowNumber % 2 === 0 ? PURPLE_100 : WHITE,
      }}
    >
      {content}
    </Box>
  );
};
