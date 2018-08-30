import { Ducks } from './types/ducks';
import { DucksAction } from './contracts';

export function createReducer<TSlice>(
  ducks: Ducks<TSlice>
) {
  const reducerFns = Object.values(ducks).reduce(
    (functions, duck) => ({
      ...functions,
      [duck.type]: duck.caseReducer
    }),
    {}
  );

  // TODO: Not correctly typed DucksAction<unknown>
  return (slice: TSlice, action: DucksAction<unknown>) =>
    !!reducerFns[action.type]
      ? reducerFns[action.type](slice, action.payload)
      : slice;
}
