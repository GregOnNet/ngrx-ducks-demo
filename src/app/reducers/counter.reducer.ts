import { createReducerFrom } from '@co-it/ngrx-ducks';
import { Action } from '@ngrx/store';

import { counterActions } from './counter.actions';
import { CounterSlice } from './counter.state';

const initialState: CounterSlice = {
  count: 0,
  isLoading: false
};

export function reducer(state = initialState, action: Action): CounterSlice {
  return createReducerFrom(counterActions)(state, action);
}
