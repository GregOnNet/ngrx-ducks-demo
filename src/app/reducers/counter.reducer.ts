import { Action } from '@ngrx/store';

import { createDuck, createReducer } from '../lib/ngrx-ducks';

export interface State {
  count: number;
}

export const ducks = {
  increment: createDuck('[Counter] Increment', increment),
  decrement: createDuck('[Counter] Decrement', decrement),
  setTo5: createDuck('[Counter] Set to 5', setTo5)
};

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  return createReducer(ducks)(state, action);
}

function setTo5(state: State): State {
  return {
    ...state,
    count: 5
  };
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
