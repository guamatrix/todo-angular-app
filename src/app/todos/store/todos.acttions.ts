import { Action } from '@ngrx/store';
import { Todos } from '../models/interfaces';

export enum TodosActionsTypes {
  ADD_TODOS = '[TODOS] add todos',
  SET_TODOS = '[TODOS] set todos',
  DELETE_TODOS = '[TODOS] delete todos',
  UPDATE_TODOS = '[TODOS] update todos',
  INIT_TODOS = '[TODOS] init todos',
  SELECTED_TODOS = '[TODOS] selected todos'
}

export class AddTodos implements Action {
  readonly type = TodosActionsTypes.ADD_TODOS;

  constructor(public payload: Todos) {}
}

export class SetTodos implements Action {
  readonly type = TodosActionsTypes.SET_TODOS;
  constructor(public payload: Todos[]) {}
}

export class DeleteTodos implements Action {
  readonly type = TodosActionsTypes.DELETE_TODOS;
  constructor(public payload: string) {}
}

export class UpdateTodos implements Action {
  readonly type = TodosActionsTypes.UPDATE_TODOS;
  constructor(public payload: Todos ) {}
}

export class InitTodos implements Action {
  readonly type = TodosActionsTypes.INIT_TODOS;
}

export type TodosActions = AddTodos | SetTodos | DeleteTodos | UpdateTodos | InitTodos;
