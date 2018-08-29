import { DispatchingAction } from './dispatching-action';
import { ExtractDuckPayload } from './extract-ducks-payload';

export type ActionDispatchers<TDucks> = {
  [K in keyof TDucks]: DispatchingAction<ExtractDuckPayload<TDucks[K]>>
};
