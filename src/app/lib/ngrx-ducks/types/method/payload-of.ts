export type PayloadOf<T> = T extends (
  state: unknown,
  payload: infer TPayload
) => unknown
  ? TPayload
  : never;
