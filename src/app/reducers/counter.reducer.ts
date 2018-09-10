import { createReducerFrom } from '@co-it/ngrx-ducks';
import { Action } from '@ngrx/store';

import { counterActions } from './counter.actions';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  return createReducerFrom(counterActions)(state, action);
}
