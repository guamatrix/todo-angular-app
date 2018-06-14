import { createFeatureSelector, createSelector } from '@ngrx/store';
import _ from 'lodash';

import { TodosActionsTypes, TodosActions } from './todos.acttions';
import { State } from '../models/state';
import { } from '@ngrx/entity';
import { Todos } from '../models/interfaces';

// interface EntityState {
//   ids: string[] | number [];
//   entities: { [id: string]: Todos }
// }

const initialState: State = {
  todos: {}
};

export function todosReducer(state = initialState, action: TodosActions) {
  switch (action.type) {
    case TodosActionsTypes.ADD_TODOS:
      const todosToAdd = { ...state.todos };
      todosToAdd[action.payload._id] = action.payload;
      return { ...state, todos: todosToAdd };

    case TodosActionsTypes.SET_TODOS:
      const todos = _.keyBy(action.payload, '_id');
      return { ...state, todos };
      // return { ...state, todos: action.payload };

    case TodosActionsTypes.INIT_TODOS:
      return { ...state, todos: initialState };

    case TodosActionsTypes.UPDATE_TODOS:
      const todosToUpdate = { ...state.todos };
      todosToUpdate[action.payload._id] = action.payload;
      return { ...state, todos: todosToUpdate };

    case TodosActionsTypes.DELETE_TODOS:
      const todosToDelete = { ...state.todos };
      return { ...state, todos: _.omit(todosToDelete, action.payload) };

    default:
      return state;
  }
}

export const getTodosState = createFeatureSelector<State>('todosState');
// export const getTodos = createSelector(getTodosState, (state: State) => state.todos);
export const getTodos = createSelector(getTodosState, (state: State) =>
  Object.keys(state.todos)
    .map(key => state.todos[key])
    .sort((a, b) => {
      if (a._id > b._id) {
        return -1;
      }
      return 1;
    })
);
