import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BLACK_28, WHITE, BLACK_12 } from '~/constants';

export const StyledInput = styled(TextField)({
  '& p.Mui-disabled > span': {
    color: BLACK_28,
  },
  '& input': {
    color: WHITE,
  },
  '& input.Mui-disabled': {
    color: BLACK_28,
    WebkitTextFillColor: BLACK_28,
  },
  '& label': {
    color: WHITE,
  },
  '& label.Mui-focused': {
    color: WHITE,
  },
  '& label.Mui-disabled': {
    color: BLACK_28,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: WHITE,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: WHITE,
    },
    '&:hover fieldset': {
      borderColor: WHITE,
    },
    '&.Mui-focused fieldset': {
      borderColor: WHITE,
    },
    '&.Mui-disabled fieldset': {
      borderColor: BLACK_12,
    },
  },
});
