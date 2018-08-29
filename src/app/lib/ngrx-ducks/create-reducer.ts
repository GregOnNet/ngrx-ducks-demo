import { Ducks, DucksAction } from './contracts';

export function createReducer<TSlice, TPayload>(
  ducks: Ducks<TSlice>
) {
  const reducerFns = Object.values(ducks).reduce(
    (functions, duck) => ({
      ...functions,
      [duck.type]: duck.mutator
    }),
    {}
  );

  return (slice: TSlice, action: DucksAction<TPayload>) =>
    !!reducerFns[action.type]
      ? reducerFns[action.type](slice, action.payload)
      : slice;
}
