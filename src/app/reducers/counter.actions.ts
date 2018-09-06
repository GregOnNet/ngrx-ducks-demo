import { wireUpActions } from '@co-it/ngrx-ducks';

interface State {
  count: number;
}

export class Counter {
  readonly LoadAll = '[Counter] Load All With Ducks';

  set(_state: State, payload: number): State {
    return {
      count: payload
    };
  }

  increment(_state: State, payload: number): State {
    return {
      count: _state.count + payload
    };
  }
}

export function counterActions() {
  return wireUpActions(Counter, {
    set: '[Counter] Set with Ducks',
    increment: '[Counter] Increment with Ducks'
  });
}
