import MuiAccordion, { type AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { BLACK_12, WHITE } from "~/constants";

export const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  border: `1px solid ${WHITE}`,
  backgroundColor: "unset",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  "&.Mui-disabled": {
    borderColor: BLACK_12,
    backgroundColor: "unset",
  },
}));
