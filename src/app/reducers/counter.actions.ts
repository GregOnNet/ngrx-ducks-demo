import { wireUpActions, effect } from '@co-it/ngrx-ducks';
import { CounterSlice } from './counter.state';

export class Counter {
  readonly loadAll = effect('[Counter] Load All With Ducks');
  readonly delayedCounterSet = effect<number>('[Counter] Set counter after a while');

  set(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: payload,
      isLoading: false
    };
  }

  increment(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: state.count + payload
    };
  }

  decrement(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: state.count - payload
    };
  }

  bahu(state: CounterSlice, _payload: string): CounterSlice {
    return {
      ...state,
      count: state.count - 0
    };
  }

  initialize(state: CounterSlice): CounterSlice {
    return {
      ...state,
      isLoading: true
    };
  }
}

export const counterActions = wireUpActions(Counter, {
  set: '[Counter] Set with Ducks',
  increment: '[Counter] Increment with Ducks',
  decrement: '[Counter] Decrement with Ducks',
  bahu: '[Counter] Bahu with Ducks',
  initialize: '[Counter] Load All With Ducks'
});
