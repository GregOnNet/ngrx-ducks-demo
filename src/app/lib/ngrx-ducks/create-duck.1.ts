import { Duck, Mutator } from './contracts';

export type MappedFn<T> = T extends OpPlain
  ? Op<ReturnType<T>>
  : Tp;

export type OpPlain = (a: unknown) => unknown;

export type Op<TState> = (a: TState) => TState;
// export type Tp<TState, TPayload> = (a: TState, b: TPayload) => TState;

class Order {}

function a(_a: string): string {
  return '';
}
function b(_b: Order): Order {
  return {};
}
function ab(_a, _b) {}

function factory<T>(_fn: T): MappedFn<T> {
  return a as any;
}

const ma = factory(a);
const mb = factory(b);
const maa = factory(ab);

export function createDuck1<TSlice, TPayload>(
  type: string,
  mutator: Mutator<TSlice, TPayload>
): Duck<TSlice, TPayload> {
  const duck: any = (payload: TPayload) => ({
    type,
    payload
  });

  duck.type = type;
  duck.mutator = mutator;

  return duck;
}
