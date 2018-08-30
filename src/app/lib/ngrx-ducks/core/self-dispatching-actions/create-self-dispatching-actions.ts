import { StoreWithDispatch } from '../../contracts';
import { SelfDispatchingActions } from '../types/self-dispatching-action/self-dispatching-actions';
import { createSelfDispatchingAction } from './create-self-dispatching-action';

export function createSelfDispatchingActions<TDuck>(
  ducks: TDuck,
  store: StoreWithDispatch
): SelfDispatchingActions<TDuck> {
  return Object.entries(ducks).reduce(
    (dispatchers: SelfDispatchingActions<TDuck>, [key, duck]) => {
      return {
        ...(dispatchers as any),
        [key]: createSelfDispatchingAction(duck, store)
      };
    },
    {}
  );
}
