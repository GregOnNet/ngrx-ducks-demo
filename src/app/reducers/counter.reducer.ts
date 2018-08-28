import { Action } from '@ngrx/store';

import { createDuck, createReducer } from '../lib/ngrx-ducks';

export interface State {
  count: number;
}

export const ducks = {
  increment: createDuck('[Counter] Increment', increment),
  decrement: createDuck('[Counter] Decrement', decrement)
};

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  return createReducer(ducks)(state, action);
}

function increment(state: State, count: number): State {
  return {
    ...state,
    count: ++count
  };
}

function decrement(state: State, count: number): State {
  return {
    ...state,
    count: --count
  };
}
