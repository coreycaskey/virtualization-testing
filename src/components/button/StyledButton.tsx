import { Button, type ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BLACK_12, BLACK_28, WHITE, WHITE_30 } from "~/constants";

export const StyledButton = styled((props: ButtonProps) => (
  <Button variant="outlined" fullWidth {...props} />
))({
  "&.MuiButton-root": {
    borderColor: WHITE_30,
    color: WHITE,

    "&.Mui-disabled": {
      borderColor: BLACK_12,
      color: BLACK_28,
    },

    "&:hover": {
      backgroundColor: WHITE_30,
      borderColor: WHITE,
    },
  },
});
