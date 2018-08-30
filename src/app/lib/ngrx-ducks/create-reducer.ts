import { Ducks } from './types/ducks';
import { DucksAction } from './contracts';
import { Action } from './types/__internal__/action';

export type ReducerFn<T> = (state: T, action: Action) => T;

export function createReducer<TSlice>(ducks: Ducks<TSlice>): ReducerFn<TSlice> {
  const reducerFns = Object.values(ducks).reduce(
    (functions, duck) => ({
      ...functions,
      [duck.type]: duck.caseReducer
    }),
    {}
  );

  // TODO: Not correctly typed DucksAction<unknown>
  return (slice: TSlice, action: DucksAction<unknown>): TSlice =>
    !!reducerFns[action.type]
      ? reducerFns[action.type](slice, action.payload)
      : slice;
}
