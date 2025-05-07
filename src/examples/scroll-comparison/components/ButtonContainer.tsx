import { Stack } from '@mui/material';
import { FC } from 'react';

import { StyledButton } from '~/components/button/StyledButton';

interface ButtonContainerProps {
  onReset: () => void;
  onStartScroll: () => void;
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
  onReset,
  onStartScroll,
}) => (
  <Stack gap={2}>
    <StyledButton onClick={onStartScroll}>Scroll To Bottom</StyledButton>
    <StyledButton onClick={onReset}>Reset To Top</StyledButton>
  </Stack>
);
