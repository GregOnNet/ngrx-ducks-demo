import { createActionDispatchers, createDuck } from '../lib/ngrx-ducks';
import { ActionDispatchers } from '../lib/ngrx-ducks/contracts';

interface State {
  board: string[];
}

interface Board {
  name: string;
}

export class MyBabyDucks {
  create = (state: State, board: Board): State => {
    return {} as State;
  }

  delete = (state: State, board: Board): State => {
    return {} as State;
  }
}

function edit(state: State, board: Board): State {
  return {} as State;
}

const myBabyDucks = new MyBabyDucks();

const babyDucks = {
  create: createDuck('[Baby] create', myBabyDucks.create),
  edit: createDuck('[Baby] edit', edit),
  delete: createDuck('[Baby] delete', myBabyDucks.delete)
};

const actions = createActionDispatchers(babyDucks, { dispatch: () => {} } );
