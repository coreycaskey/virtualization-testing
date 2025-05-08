import { Stack } from "@mui/material";

import { StyledButton } from "~/components/button/StyledButton";

interface ButtonContainerProps {
  onReset: () => void;
  onStartScroll: () => void;
}

export const ButtonContainer = ({
  onReset,
  onStartScroll,
}: ButtonContainerProps) => (
  <Stack gap={2}>
    <StyledButton onClick={onStartScroll}>Scroll To Bottom</StyledButton>
    <StyledButton onClick={onReset}>Reset To Top</StyledButton>
  </Stack>
);
