export interface ProfilerTracker {
  numUpdates: number;
  totalTime: number;
}

export type AccordionStates = {
  [key in ExampleType]: boolean;
};

export const Examples = {
  HEAVY: 'HEAVY',
  SCROLL: 'SCROLL',
  SIMPLE: 'SIMPLE',
  VARIABLE: 'VARIABLE',
} as const;

export type ExampleType = (typeof Examples)[keyof typeof Examples];
