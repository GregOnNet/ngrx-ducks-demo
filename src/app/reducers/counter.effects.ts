import { Inject, Injectable } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks/lib/core/types';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { Counter } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect()
  setCounterTo5 = this.actions$.pipe(
    ofType(this.counter.LoadAll),
    map(() => {
      console.log(this.counter.set.plain(-1000));
      return this.counter.set.plain(-1000);
    })
  );

  constructor(
    private actions$: Actions,
    @Inject(Counter) private counter: Ducks<Counter>
  ) {
    console.log(this.counter.LoadAll);
  }
}
