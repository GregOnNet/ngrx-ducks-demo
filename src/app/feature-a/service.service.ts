import { Store } from '@ngrx/store';

export class ServiceService {
  constructor(store: Store<any>) {
    console.log(store);
  }
}
