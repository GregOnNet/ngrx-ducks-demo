import { Action } from './core/types/__internal__/action';
import { ActionWithAnyPayload } from './core/types/__internal__/action-with-payload';
import { Ducks } from './core/types/ducks';

export type ReducerFn<T> = (state: T, action: Action) => T;

export function createReducer<TSlice>(ducks: Ducks<TSlice>): ReducerFn<TSlice> {
  const reducerFns = Object.values(ducks).reduce(
    (functions, duck) => ({
      ...functions,
      [duck.type]: duck.caseReducer
    }),
    {}
  );

  return (slice: TSlice, action: ActionWithAnyPayload): TSlice =>
    !!reducerFns[action.type]
      ? reducerFns[action.type](slice, action.payload)
      : slice;
}
