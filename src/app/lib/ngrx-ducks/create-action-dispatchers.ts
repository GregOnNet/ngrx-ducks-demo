import { ActionDispatchers, StoreWithDispatch } from './contracts';

export function createActionDispatchers<TDucks>(
  ducks: TDucks,
  store: StoreWithDispatch
): ActionDispatchers<TDucks> {
  return Object.entries(ducks).reduce(
    (actionDispatchers: ActionDispatchers<TDucks>, [key, duck]) => ({
      ...(actionDispatchers as any),
      [key]: (payload: any) => store.dispatch(duck(payload))
    }),
    {}
  );
}
