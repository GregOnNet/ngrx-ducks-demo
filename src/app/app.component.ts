import { Component, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterActions } from './reducers/counter.actions';
import { MyBabyActions, MyBabyDucks } from './reducers/try';
import { ActionDispatchers } from './lib/ngrx-ducks/contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;
  count: number;

  constructor(
    private _store: Store<any>,
    private actions: CounterActions,
    @Inject(MyBabyActions) private babyActions: ActionDispatchers<MyBabyDucks>
  ) {
    this.count$ = this._store.pipe(select(state => state.counter.count));
    this.count$.subscribe(count => (this.count = count));
  }

  increment() {
    this.babyActions.
    this.actions.counter.increment(this.count);
    console.log(this.actions.counter.increment.plain(this.count));
  }

  decrement() {
    this.actions.counter.decrement(this.count);
  }
}
