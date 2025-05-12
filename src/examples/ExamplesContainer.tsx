import { Box, CircularProgress, Typography } from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

import { StyledAccordion } from "~/components/accordion/StyledAccordion";
import { StyledAccordionDetails } from "~/components/accordion/StyledAccordionDetails";
import { StyledAccordionSummary } from "~/components/accordion/StyledAccordionSummary";
import { useItemCountContext } from "~/context/ItemCountContext";
import { type AccordionStates } from "~/types";
import { HeavyComparison } from "./heavy-comparison";
import { ScrollComparison } from "./scroll-comparison";
import { SimpleComparison } from "./simple-comparison";
import { VariableComparison } from "./variable-comparison";

interface ExamplesContainerProps {
  accordionStates: AccordionStates;
  setAccordionStates: Dispatch<SetStateAction<AccordionStates>>;
}

export const ExamplesContainer = ({
  accordionStates: { HEAVY, SCROLL, SIMPLE, VARIABLE },
  setAccordionStates,
}: ExamplesContainerProps) => {
  const { itemCount } = useItemCountContext();

  return (
    <Box display="flex" flexDirection="column">
      <StyledAccordion
        expanded={SIMPLE}
        onChange={(_, expanded) =>
          setAccordionStates((prev) => ({ ...prev, SIMPLE: expanded }))
        }
        disabled={!itemCount}
      >
        <StyledAccordionSummary>
          <Typography variant="button">
            Simple Virtualization Comparison
          </Typography>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
          {SIMPLE ? <SimpleComparison /> : <CircularProgress />}
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion
        expanded={HEAVY}
        onChange={(_, expanded) =>
          setAccordionStates((prev) => ({ ...prev, HEAVY: expanded }))
        }
        disabled={!itemCount}
      >
        <StyledAccordionSummary>
          <Typography variant="button">
            Heavy Virtualization Comparison{" "}
          </Typography>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
          {HEAVY ? <HeavyComparison /> : <CircularProgress />}
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion
        expanded={VARIABLE}
        onChange={(_, expanded) =>
          setAccordionStates((prev) => ({ ...prev, VARIABLE: expanded }))
        }
        disabled={!itemCount}
      >
        <StyledAccordionSummary>
          <Typography variant="button">
            Variable Virtualization Comparison
          </Typography>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
          {VARIABLE ? <VariableComparison /> : <CircularProgress />}
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion
        expanded={SCROLL}
        onChange={(_, expanded) =>
          setAccordionStates((prev) => ({ ...prev, SCROLL: expanded }))
        }
        disabled={!itemCount}
      >
        <StyledAccordionSummary>
          <Typography variant="button">
            Scroll Virtualization Comparison
          </Typography>
        </StyledAccordionSummary>

        <StyledAccordionDetails>
          {SCROLL ? <ScrollComparison /> : <CircularProgress />}
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
};
