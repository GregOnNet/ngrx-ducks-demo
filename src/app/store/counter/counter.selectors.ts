import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const visitCounter = createFeatureSelector<CounterState>('counter');

export const currentCount = createSelector(
  visitCounter,
  c => c.count
);
export const isLoading = createSelector(
  visitCounter,
  c => c.isLoading
);
