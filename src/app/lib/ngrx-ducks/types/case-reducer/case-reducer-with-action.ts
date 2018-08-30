import { Action } from '../__internal__/action';

export type CaseReducerWithAction<T> = (state: T, action: Action) => T;
