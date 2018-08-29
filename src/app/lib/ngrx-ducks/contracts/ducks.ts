import { Duck } from './duck';

export interface Ducks<TState> {
  [key: string]: Duck<TState, unknown>;
}
