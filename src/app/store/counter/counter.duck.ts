import {
  Action,
  DucksifiedAction,
  Ducksify,
  effect,
  reducerFrom
} from '@co-it/ngrx-ducks';
import { CounterState } from './counter.state';

@Ducksify<CounterState>({
  initialState: { count: 0, isLoading: true }
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

export function reducer(
  state: CounterState | undefined,
  action: DucksifiedAction
): CounterState {
  return reducerFrom(Counter)(state, action);
}
