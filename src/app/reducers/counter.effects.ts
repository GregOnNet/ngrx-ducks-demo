import { Inject, Injectable } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { debounceTime, map } from 'rxjs/operators';
import { Counter } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
    ofType(this.counter.loadAll.type),
    map(() => {
      return this.counter.set.plain(100000);
    })
  );

  @Effect()
  delayedCounterSet = this.actions$.pipe(
    ofType<{ type: string; payload: number }>(
      this.counter.delayedCounterSet.type
    ),
    debounceTime(2000),
    map(({ payload }) => {
      return this.counter.set.plain(payload);
    })
  );

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: Ducks<Counter>
  ) {}
}
