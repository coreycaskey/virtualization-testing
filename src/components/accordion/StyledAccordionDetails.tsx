import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

import { WHITE, PURPLE_900 } from '~/constants';

export const StyledAccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: `1px solid ${WHITE}`,
    backgroundColor: PURPLE_900,
  })
);
