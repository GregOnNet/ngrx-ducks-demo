import { CounterState } from './counter.state';

/**
 * This file is not used in the project
 * It demonstrates the difference to the duck approach.
 */

const initialState: CounterState = {
  count: 0,
  isLoading: false
};

export function reducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    case CounterActionTypes.Set:
      return {
        ...state,
        count: action.payload,
        isLoading: false
      };
  }
}

enum CounterActionTypes {
  Set = '[Counter] Set'
}

interface CounterActions {
  type: string;
  payload: any;
}
