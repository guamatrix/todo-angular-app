import { Todos } from './interfaces';
import * as fromRoot from '../../shared/models/States';
import { User } from '../../shared/models/interfaces';

export interface State {
  todos: { [key: string]: Todos };
  user: User;
}

export interface TodosState extends fromRoot.State {
  todosState: State;
}

