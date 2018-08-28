import { Duck } from './duck';

export interface Ducks<TState, TPayload> {
  [key: string]: Duck<TState, TPayload>;
}
