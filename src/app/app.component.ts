import { Component, Inject } from '@angular/core';
import { Duck } from '@co-it/ngrx-ducks';
import { Observable } from 'rxjs';
import * as fromCounter from './store/counter';
import { Counter } from './store/counter/counter.duck';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter</h1>

    <p [hidden]="(isLoading$ | async) == false">
      Initializing Counter...
    </p>

    <p>{{ count$ | async }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  count$: Observable<number>;

  constructor(@Inject(Counter) private counter: Duck<Counter>) {
    this.counter.set.dispatch(10);

    this.count$ = this.counter.pick(fromCounter.currentCount);
    this.isLoading$ = this.counter.pick(fromCounter.isLoading);
  }

  increment() {
    this.counter.increment(1);
  }

  decrement() {
    this.counter.decrement(1);
  }
}
