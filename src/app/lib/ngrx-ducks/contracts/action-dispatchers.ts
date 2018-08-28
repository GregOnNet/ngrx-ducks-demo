import { ExtractDuckPayload } from './extract-ducks-payload';

export type ActionDispatchers<TDucks> = {
  [K in keyof TDucks]: DispatchingAction<ExtractDuckPayload<TDucks[K]>>
};

export interface DispatchingAction<TPayload> {
  (payload: TPayload): void;
  plain(
    payload: TPayload
  ): {
    type: string;
    payload: TPayload;
  };
}
