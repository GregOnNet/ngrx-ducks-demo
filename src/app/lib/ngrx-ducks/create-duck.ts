import { Duck, Mutator } from './contracts';

export function createDuck<TSlice, TPayload>(
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

