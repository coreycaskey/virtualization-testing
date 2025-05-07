import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

import { BLACK_28, WHITE } from '~/constants';

export const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  color: WHITE,
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: WHITE,

    '&.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '&.Mui-disabled': {
    color: BLACK_28,
    opacity: 1,

    '& .MuiAccordionSummary-expandIconWrapper': {
      color: BLACK_28,
    },
  },
}));
