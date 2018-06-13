import { Todos } from './interfaces';
import * as fromRoot from '../../shared/models/States';

export interface State {
  todos: { [key: string]: Todos };
}

export interface TodosState extends fromRoot.State {
  todosState: State;
}

