import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as Actions from './todos.acttions';
import { State, TodosState } from '../models/state';
import { Todos } from '../models/interfaces';

const initialState: State = {
  todos: [],
  selectedTodos: -1
};

export function todosReducer(state = initialState, action: Actions.TodosActions) {
  switch (action.type) {
    case Actions.ADD_TODOS:
      const todosToAdd = [ ...state.todos, action.payload ];
      return { ...state, todos: todosToAdd };

    case Actions.SET_TODOS:
      return { ...state, todos: action.payload };

    case Actions.INIT_TODOS:
      return { ...state, todos: initialState };

    case Actions.UPDATE_TODOS:
      const todosToUpdate = [ ...state.todos ];
      todosToUpdate[state.selectedTodos] = action.payload;
      return { ...state, todos: todosToUpdate };

    case Actions.DELETE_TODOS:
      const todosToDelete = [ ...state.todos ];
      todosToDelete.splice(state.selectedTodos, 1);
      return { ...state, todos: todosToDelete };

    case Actions.SELECTED_TODOS:
      return { ...state, selectedTodos: action.payload };

    default:
      return state;
  }
}

export const getTodosState = createFeatureSelector<State>('todosState');
export const getTodos = createSelector(getTodosState, (state: State) => state.todos);
export const getSelectedTodos = createSelector(getTodosState, (state: State) => state.selectedTodos);
export const isSelectedTodos = createSelector(getTodosState, (state: State) => state.selectedTodos !== -1);
