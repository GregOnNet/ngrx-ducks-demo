import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { CounterActions } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
      ofType(this.counterActions.LoadAll),
      map(() => this.counterActions.counter.setTo5.plain())
    );

  constructor(
    private actions$: Actions,
    private counterActions: CounterActions
  ) {}
}
