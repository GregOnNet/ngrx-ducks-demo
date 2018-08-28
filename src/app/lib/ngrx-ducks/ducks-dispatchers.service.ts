import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ActionDispatchers, DispatchingAction, Duck } from './contracts';

@Injectable({ providedIn: 'root' })
export class DucksDispatchers {
  constructor(private store: Store<any>) {}

  create<TDucks>(ducks: TDucks): ActionDispatchers<TDucks> {
    return Object.entries(ducks).reduce(
      (actionDispatchers, [key, duck]) => ({
        ...(actionDispatchers as any),
        [key]: this.createDispatchingAction(duck)
      }),
      {}
    );
  }

  private createDispatchingAction<TSlice, TPayload>(
    duck: Duck<TSlice, TPayload>
  ): DispatchingAction<TPayload> {
    const dispatchingAction: any = (payload: TPayload) =>
      this.store.dispatch(duck(payload));

    dispatchingAction.plain = (payload: TPayload) => ({
      type: duck.type,
      payload
    });

    return dispatchingAction;
  }
}
