export type Mutator<TSlice, TPayload> = (
  slice: TSlice,
  payload?: TPayload
) => TSlice;
