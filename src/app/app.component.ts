import { Component, Inject } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { Counter } from './reducers/counter.actions';

import * as fromCounter from './reducers/counter.selectors';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter <small>{{ isLoading$ | async }}</small></h1>

    <p><strong>Value</strong> {{ count$ | async }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  count$: Observable<number>;

  constructor(@Inject(Counter) private counter: Ducks<Counter>) {
    this.counter.loadAll.dispatch();
    this.counter.delayedCounterSet.dispatch(-4000);

    this.count$ = this.counter.pick(fromCounter.currentCount);
    this.isLoading$ = this.counter.pick(fromCounter.isLoading);
  }

  increment() {
    this.counter.increment(1000);
  }

  decrement() {
    this.counter.decrement(1000);
  }
}
