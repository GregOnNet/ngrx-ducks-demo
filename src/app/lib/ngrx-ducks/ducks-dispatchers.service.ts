import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createSelfDispatchingActions } from './core/self-dispatching-actions/create-self-dispatching-actions';
import { SelfDispatchingActions } from './core/types/self-dispatching-action/self-dispatching-actions';

@Injectable({ providedIn: 'root' })
export class DucksDispatchers {
  constructor(private store: Store<any>) {}

  create<TDucks>(ducks: TDucks): SelfDispatchingActions<TDucks> {
    return createSelfDispatchingActions(ducks, this.store);
  }
}
