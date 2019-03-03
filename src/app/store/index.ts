import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterState } from './counter';
import { reducer } from './counter/counter.duck';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
