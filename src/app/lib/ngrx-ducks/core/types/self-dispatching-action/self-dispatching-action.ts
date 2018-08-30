import { MutatorWithPayload } from '../mutator/mutator-with-payload';
import { MutatorWithoutPayload } from '../mutator/mutator-without-payload';
import { SelfDispatchingActionWithPayload } from './self-dispatching-action-with-payload';
import { SelfDispatchingActionWithoutPayload } from './self-dispatching-action-without-payload';

export type SelfDispatchingAction<T> = T extends MutatorWithoutPayload<
  infer TSlice
>
  ? SelfDispatchingActionWithoutPayload
  : T extends MutatorWithPayload<infer TSlice2, infer TPayload>
    ? SelfDispatchingActionWithPayload<TPayload>
    : never;
