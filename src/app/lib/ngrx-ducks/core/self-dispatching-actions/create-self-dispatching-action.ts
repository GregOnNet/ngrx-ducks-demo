import { SelfDispatchingAction } from '../types/self-dispatching-action/self-dispatching-action';
import { Store } from '../types/__internal__/store';

export function createSelfDispatchingAction<TDuck>(
  duck: TDuck,
  store: Store
): SelfDispatchingAction<TDuck> {
  const selfDispatchingAction: any = payload =>
    store.dispatch((duck as any)(payload));

  selfDispatchingAction.plain = duck;

  return selfDispatchingAction;
}
