import { DucksAction } from './ducks-action';
import { Mutator } from './mutator';

export interface Duck<TSlice, TPayload> {
  (payload?: TPayload): DucksAction<TPayload>;
  type: string;
  mutator: Mutator<TSlice, TPayload>;
}

