import { Action } from '@ngrx/store';

export interface StoreWithDispatch {
  dispatch: (action: Action) => void;
}
