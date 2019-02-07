import { Inject, Injectable } from '@angular/core';
import { DuckService } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { debounceTime, map } from 'rxjs/operators';
import { ActionOf } from '../../lib';
import { Counter } from './counter.duck';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
    ofType(this.counter.loadAll.type),
    map(() => {
      return this.counter.set.action(100000);
    })
  );

  @Effect()
  delayedCounterSet = this.actions$.pipe(
    ofType<ActionOf<number>>(this.counter.delayedCounterSet.type),
    debounceTime(2000),
    map(({ payload }) => {
      return this.counter.set.action(payload);
    })
  );

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: DuckService<Counter>
  ) {}
}
