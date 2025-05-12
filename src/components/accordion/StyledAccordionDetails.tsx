import { AccordionDetails as MuiAccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PURPLE_900, WHITE } from "~/constants";

export const StyledAccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => ({
    backgroundColor: PURPLE_900,
    borderTop: `1px solid ${WHITE}`,
    padding: theme.spacing(2),
  }),
);
