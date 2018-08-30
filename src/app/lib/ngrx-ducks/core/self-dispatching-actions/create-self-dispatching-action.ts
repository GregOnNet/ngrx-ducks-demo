import { StoreWithDispatch } from '../../contracts';
import { SelfDispatchingAction } from '../types/self-dispatching-action/self-dispatching-action';

export function createSelfDispatchingAction<TDuck>(
  duck: TDuck,
  store: StoreWithDispatch
): SelfDispatchingAction<TDuck> {
  const selfDispatchingAction: any = payload =>
    store.dispatch((duck as any)(payload));

  selfDispatchingAction.plain = duck;

  return selfDispatchingAction;
}
