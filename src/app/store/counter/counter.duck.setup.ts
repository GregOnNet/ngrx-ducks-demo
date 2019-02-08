import { ducksify, reducerFrom } from '@co-it/ngrx-ducks';
import { Action, Store } from '@ngrx/store';
import { Counter } from './counter.duck';
import { CounterState } from './counter.state';

export const registerCounter = {
  provide: Counter,
  useFactory: createCounterService,
  deps: [Store]
};

export function createCounterService(store: Store<unknown>) {
  return ducksify(Counter, store);
}

export function reducer(
  state: CounterState | undefined,
  action: Action
): CounterState {
  return reducerFrom(Counter)(state, action);
}
