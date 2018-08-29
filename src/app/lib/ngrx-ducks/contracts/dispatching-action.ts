export type DispatchingAction<T> = T extends
  | void
  ? DispatchingActionWithoutPayload
  : DispatchingActionWithPayload<T>;

export interface DispatchingActionWithPayload<TPayload> {
  (payload: TPayload): void;
  plain(
    payload: TPayload
  ): {
    type: string;
    payload: TPayload;
  };
}

export interface DispatchingActionWithoutPayload {
  (): void;
  plain(): {
    type: string;
  };
}
