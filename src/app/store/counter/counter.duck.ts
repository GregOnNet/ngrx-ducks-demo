import { Action, effect, InitialState } from '@co-it/ngrx-ducks';
import { CounterState } from './counter.state';

@InitialState<CounterState>({
  count: 0,
  isLoading: false
})
export class Counter {
  readonly loadAll = effect('[Counter] Load All With Ducks');
  readonly delayedCounterSet = effect<number>(
    '[Counter] Set counter after a while'
  );

  @Action('[Counter] Set with Ducks')
  set(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: payload,
      isLoading: false
    };
  }

  @Action('[Counter] Increment with Ducks')
  increment(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: state.count + payload
    };
  }

  @Action('[Counter] Decrement with Ducks')
  decrement(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: state.count - payload
    };
  }

  @Action('[Counter] Bahu with Ducks')
  bahu(state: CounterState, _payload: string): CounterState {
    return {
      ...state,
      count: state.count - 0
    };
  }

  @Action('[Counter] Load All With Ducks')
  initialize(state: CounterState): CounterState {
    return {
      ...state,
      isLoading: true
    };
  }
}
