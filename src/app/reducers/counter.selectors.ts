import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterSlice } from './counter.state';

const visitCounter = createFeatureSelector<CounterSlice>('counter');

export const currentCount = createSelector(visitCounter, c => c.count);
export const isLoading = createSelector(visitCounter, c => c.isLoading);
