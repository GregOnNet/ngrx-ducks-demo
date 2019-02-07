import { reducerFrom } from '@co-it/ngrx-ducks';
import { Action } from '@ngrx/store';
import { Counter } from './counter.actions';
import { CounterSlice } from './counter.state';

export function reducer(state: CounterSlice, action: Action): CounterSlice {
  // TODO: Refine types for reducerFrom
  return reducerFrom(Counter)(state, action) as any;
}
