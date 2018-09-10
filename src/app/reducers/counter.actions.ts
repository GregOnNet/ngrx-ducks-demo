import { wireUpActions } from '@co-it/ngrx-ducks';

interface State {
  count: number;
}

export class Counter {
  readonly loadAll = '[Counter] Load All With Ducks';

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

  decrement(_state: State, payload: number): State {
    return {
      count: _state.count - payload
    };
  }

  bahu(_state: State, _payload: string): State {
    return {
      count: _state.count - 0
    };
  }
}

export const counterActions = wireUpActions(Counter, {
  set: '[Counter] Set with Ducks',
  increment: '[Counter] Increment with Ducks',
  decrement: '[Counter] Decrement with Ducks',
  bahu: '[Counter] Bahu with Ducks'
});
