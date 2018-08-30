import { Duck } from './core/types/duck';

export function createDuck<T>(type: string, caseReducer: T): Duck<T> {
  const duck: any = payload => ({
    type,
    payload
  });

  duck.type = type;
  duck.caseReducer = caseReducer;

  return duck;
}

