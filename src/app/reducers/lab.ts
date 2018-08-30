import { Action } from '@ngrx/store';

import { createDuck, createReducer } from '../lib/ngrx-ducks';
import { Duck } from '../lib/ngrx-ducks/core/types/duck';
import { SelfDispatchingActions } from '../lib/ngrx-ducks/core/types/self-dispatching-action/self-dispatching-actions';

export interface State {
  count: number;
}

export class MyDucks {
  setTo5(state: State): State {
    return {
      ...state,
      count: 5
    };
  }

  increment(state: State, count: number): State {
    return {
      ...state,
      count: ++count
    };
  }

  decrement(state: State, count: number): State {
    return {
      ...state,
      count: --count
    };
  }
}

type Ducks<T> = {
  [K in keyof T]: Duck<T[K]>
};

const t = {} as Ducks<MyDucks>;
const st = {} as SelfDispatchingActions<MyDucks>;

export const ducks = {
  increment: createDuck('[Counter] Increment', increment),
  decrement: createDuck('[Counter] Decrement', decrement),
  setTo5: createDuck('[Counter] Set to 5', setTo5)
};

const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  return createReducer<State>(ducks)(state, action);
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
