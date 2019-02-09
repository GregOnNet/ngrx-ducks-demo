import { Action, effect, InitialState } from '@co-it/ngrx-ducks';
import { CounterState } from './counter.state';

@InitialState<CounterState>({
  count: 0,
  isLoading: true
})
export class Counter {
  readonly set = effect<number>('[Counter] Load Count');

  @Action('[Counter] Increment value')
  increment(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: state.count + payload
    };
  }

  @Action('[Counter] Decrement value')
  decrement(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: state.count - payload
    };
  }

  @Action('[Counter] Set value')
  override(state: CounterState, payload: number): CounterState {
    return {
      ...state,
      count: payload,
      isLoading: false
    };
  }
}
