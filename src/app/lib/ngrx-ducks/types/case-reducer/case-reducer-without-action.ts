export type CaseReducerWithoutAction<T> = (
  state: T,
  payload?: null
) => T;
