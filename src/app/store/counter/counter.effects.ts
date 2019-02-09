import { Inject, Injectable } from '@angular/core';
import { Duck } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { ActionOf } from 'src/app/lib';
import { Counter } from './counter.duck';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
    ofType<ActionOf<number>>(this.counter.set.type),
    delay(2000),
    map(({ payload }) => this.counter.override.action(payload))
  );

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: Duck<Counter>
  ) {}
}
