import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterState, reducer } from './counter';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
