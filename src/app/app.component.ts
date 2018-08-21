import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private _store: Store<any>) {
    this.count$ = this._store.pipe(select(state => state.counter.count));
  }

  increment() {
    this._store.dispatch({ type: 'Increment' });
  }

  decrement() {
    this._store.dispatch({ type: 'Decrement' });
  }
}
