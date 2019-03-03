import { Inject, Injectable } from '@angular/core';
import { Duck, whereType } from '@co-it/ngrx-ducks';
import { Actions, Effect } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { Counter } from './counter.duck';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
    whereType(this.counter.set),
    delay(2000),
    map(({ payload }) => this.counter.override.action(payload))
  );

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: Duck<Counter>
  ) {}
}
