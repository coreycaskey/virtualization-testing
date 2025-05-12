import { ArrowForwardIosSharp } from "@mui/icons-material";
import {
  AccordionSummary as MuiAccordionSummary,
  type AccordionSummaryProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { BLACK_28, WHITE } from "~/constants";

export const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  color: WHITE,
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-expandIconWrapper": {
    color: WHITE,

    "&.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  },

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },

  "&.Mui-disabled": {
    color: BLACK_28,
    opacity: 1,

    "& .MuiAccordionSummary-expandIconWrapper": {
      color: BLACK_28,
    },
  },
}));
