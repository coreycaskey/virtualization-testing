import { Accordion as MuiAccordion, type AccordionProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BLACK_12, WHITE } from "~/constants";

export const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  backgroundColor: "unset",
  border: `1px solid ${WHITE}`,

  "&:not(:last-child)": {
    borderBottom: 0,
  },

  "&::before": {
    display: "none",
  },

  "&.Mui-disabled": {
    backgroundColor: "unset",
    borderColor: BLACK_12,
  },
}));
