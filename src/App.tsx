import { Stack } from '@mui/material';
import { useState } from 'react';

import { RowCountInput } from './components/RowCountInput';
import { ExamplesContainer } from './examples/ExamplesContainer';
import { AccordionStates } from './types';

const INITIAL_ACCORDION_STATES: AccordionStates = {
  HEAVY: false,
  SCROLL: false,
  SIMPLE: false,
  VARIABLE: false,
};

export const App = () => {
  const [accordionStates, setAccordionStates] = useState(
    INITIAL_ACCORDION_STATES
  );

  return (
    <Stack gap={3}>
      <RowCountInput
        onReset={() => setAccordionStates(INITIAL_ACCORDION_STATES)}
      />

      <ExamplesContainer
        accordionStates={accordionStates}
        setAccordionStates={setAccordionStates}
      />
    </Stack>
  );
};
