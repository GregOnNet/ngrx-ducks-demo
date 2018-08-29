import { Action } from '@ngrx/store';

import { DucksAction } from './ducks-action';
import { Mutator, MutatorWithPayload } from './mutator';

export type Duck<TSlice, TPayload> = TPayload extends {}
  ? DuckWithPayload<TSlice, TPayload>
  : DuckWithoutPayload<TSlice>;

export interface DuckWithPayload<TSlice, TPayload> {
  (payload?: TPayload): DucksAction<TPayload>;
  type: string;
  mutator: Mutator<TSlice, TPayload>;
}

export interface DuckWithoutPayload<TSlice> {
  (): Action;
  type: string;
  mutator: Mutator<TSlice, void>;
}
