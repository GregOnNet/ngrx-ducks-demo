export type Mutator<TSlice, TPayload> = TPayload extends {}
  ? MutatorWithPayload<TSlice, TPayload>
  : MutatorWithoutPayload<TSlice>;

export type MutatorWithPayload<TSlice, TPayload> = (
  slice: TSlice,
  payload?: TPayload
) => TSlice;

export type MutatorWithoutPayload<TSlice> = (slice: TSlice) => TSlice;
