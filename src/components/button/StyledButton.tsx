import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BLACK_12, BLACK_28, WHITE_30, WHITE } from "~/constants";

export const StyledButton = styled((props: ButtonProps) => (
  <Button variant="outlined" fullWidth {...props} />
))({
  "&.MuiButton-root": {
    color: WHITE,
    borderColor: WHITE_30,

    "&.Mui-disabled": {
      color: BLACK_28,
      borderColor: BLACK_12,
    },

    "&:hover": {
      borderColor: WHITE,
      backgroundColor: WHITE_30,
    },
  },
});
