import { Injectable } from '@angular/core';

import { DucksDispatchers } from '../lib/ngrx-ducks';
import { ducks } from './counter.reducer';

@Injectable({ providedIn: 'root' })
export class CounterActions {
  static readonly LoadAll = 'Counter Load All';

  counter = this.dispatchers.create(ducks);

  constructor(private dispatchers: DucksDispatchers) {}
}
