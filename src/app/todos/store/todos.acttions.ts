import { Action } from '@ngrx/store';
import { Todos } from '../models/interfaces';

export const ADD_TODOS = '[TODOS] add todos';
export const  SET_TODOS = '[TODOS] set todos';
export const DELETE_TODOS = '[TODOS] delete todos';
export const UPDATE_TODOS = '[TODOS] update todos';
export const INIT_TODOS = '[TODOS] init todos';
export const SELECTED_TODOS = '[TODOS] selected todos';

export class AddTodos implements Action {
  readonly type = ADD_TODOS;

  constructor(public payload: Todos) {}
}

export class SetTodos implements Action {
  readonly type = SET_TODOS;
  constructor(public payload: Todos[]) {}
}

export class DeleteTodos implements Action {
  readonly type = DELETE_TODOS;
}

export class UpdateTodos implements Action {
  readonly type = UPDATE_TODOS;
  constructor(public payload: Todos ) {}
}

export class InitTodos implements Action {
  readonly type = INIT_TODOS;
}

export class SelectedTodos implements Action {
  readonly type = SELECTED_TODOS;
  constructor(public payload: number) {}
}

export type TodosActions = AddTodos | SetTodos | DeleteTodos | UpdateTodos | InitTodos | SelectedTodos;
