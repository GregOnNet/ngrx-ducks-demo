import { Component, Inject } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks/lib/core/types';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Counter } from './reducers/counter.actions';

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
    @Inject(Counter) private counter: Ducks<Counter>
  ) {
    this._store.dispatch({ type: this.counter.LoadAll });
    this.count$ = this._store.pipe(select(state => state.counter.count));
    this.count$.subscribe(count => (this.count = count));
  }

  increment() {
    this.counter.increment(1000);
  }

  decrement() {
    this.counter.set(2000);
  }
}
