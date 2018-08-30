import { MethodTakingOneParameter } from '../method/method-taking-one-parameter';
import { MethodTakingTwoParameters } from '../method/method-taking-two-parameters';
import { CaseReducerWithAction } from './case-reducer-with-action';
import { CaseReducerWithoutAction } from './case-reducer-without-action';

export type CaseReducer<Fn> = Fn extends MethodTakingOneParameter
  ? CaseReducerWithoutAction<ReturnType<Fn>>
  : Fn extends MethodTakingTwoParameters
    ? CaseReducerWithAction<ReturnType<Fn>>
    : Function;
