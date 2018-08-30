import { CaseReducer } from './case-reducer/case-reducer';
import { Mutator } from './mutator/mutator';

// Case reducer Term see https://redux.js.org/recipes/structuringreducers/refactoringreducersexample#extracting-case-reducers
export type Duck<T> = Mutator<T> & { type: string; caseReducer: CaseReducer<T> };
