import { Component, Inject } from '@angular/core';
import { DuckService } from '@co-it/ngrx-ducks';
import { Observable } from 'rxjs';
import * as fromCounter from './store/counter';
import { Counter } from './store/counter/counter.duck';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Counter <small>{{ isLoading$ | async }}</small>
    </h1>

    <p><strong>Value</strong> {{ count$ | async }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  count$: Observable<number>;

  constructor(@Inject(Counter) private counter: DuckService<Counter>) {
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
