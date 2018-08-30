import { Duck } from './types/duck';

class Order {}

function a(_a: string): string {
  return '';
}
function b(_b: Order): Order {
  return {};
}
function ab(_a: string, _b: Order): string {
  return '';
}

export function createDuck1<T>(type: string, caseReducer: T): Duck<T> {
  const duck: any = payload => ({
    type,
    payload
  });

  duck.type = type;
  duck.caseReducer = caseReducer;

  return duck;
}

const duck1 = createDuck1('Duck', a);
const duck2 = createDuck1('Duck 2', ab);

