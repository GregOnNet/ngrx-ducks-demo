import { Inject, Injectable } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
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

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: Ducks<Counter>
  ) {}
}
