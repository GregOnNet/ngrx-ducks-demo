import { Duck } from './duck';

export type ExtractDuckPayload<TDuck> = TDuck extends Duck<
  infer TSlice,
  infer TPayload
>
  ? TPayload
  : never;
