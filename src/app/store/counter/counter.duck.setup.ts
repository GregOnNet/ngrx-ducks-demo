import { createDuckService, reducerFrom } from '@co-it/ngrx-ducks';
import { Action, Store } from '@ngrx/store';
import { Counter } from './counter.duck';
import { CounterSlice } from './counter.state';

export const registerCounter = {
  provide: Counter,
  useFactory: createCounterService,
  deps: [Store]
};

export function createCounterService(store: Store<unknown>) {
  return createDuckService(Counter, store);
}

export function reducer(
  state: CounterSlice | undefined,
  action: Action
): CounterSlice {
  return reducerFrom(Counter)(state, action);
}
