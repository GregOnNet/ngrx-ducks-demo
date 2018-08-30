import { MethodTakingOneParameter } from '../method/method-taking-one-parameter.1';
import { MethodTakingTwoParameters } from '../method/method-taking-two-parameters';
import { PayloadOf } from '../method/payload-of';
import { MutatorWithPayload } from '../mutator/mutator-with-payload';
import { MutatorWithoutPayload } from '../mutator/mutator-without-payload';

/**
 * Lesart:
 * - Wen Fn dem Typ MethodTakingOneParameter entspricht, dann wird der Typ StatMutator<ReturnType<Fn>> erzeugt
 */
export type Mutator<Fn> = Fn extends MethodTakingOneParameter
  ? MutatorWithoutPayload<ReturnType<Fn>>
  : Fn extends MethodTakingTwoParameters
    ? MutatorWithPayload<ReturnType<Fn>, PayloadOf<Fn>>
    : Function;
