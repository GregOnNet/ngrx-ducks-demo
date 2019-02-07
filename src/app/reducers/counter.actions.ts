import { Action, effect, InitialState } from '@co-it/ngrx-ducks';
import { CounterSlice } from './counter.state';

@InitialState<CounterSlice>({
  count: 0,
  isLoading: false
})
export class Counter {
  readonly loadAll = effect('[Counter] Load All With Ducks');
  readonly delayedCounterSet = effect<number>(
    '[Counter] Set counter after a while'
  );

  @Action('[Counter] Set with Ducks')
  set(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: payload,
      isLoading: false
    };
  }

  @Action('[Counter] Increment with Ducks')
  increment(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: state.count + payload
    };
  }

  @Action('[Counter] Decrement with Ducks')
  decrement(state: CounterSlice, payload: number): CounterSlice {
    return {
      ...state,
      count: state.count - payload
    };
  }

  @Action('[Counter] Bahu with Ducks')
  bahu(state: CounterSlice, _payload: string): CounterSlice {
    return {
      ...state,
      count: state.count - 0
    };
  }

  @Action('[Counter] Load All With Ducks')
  initialize(state: CounterSlice): CounterSlice {
    return {
      ...state,
      isLoading: true
    };
  }
}
