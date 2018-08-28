import { Action } from '@ngrx/store';

export interface DucksAction<TPayload> extends Action {
  payload?: TPayload;
}
