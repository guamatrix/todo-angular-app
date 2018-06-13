import { SharedActionsTypes, SharedActions } from './shared.actions';

import { SharedState } from '../models/States';
import { LocalStorage } from './LocalStorage';

const initialState: SharedState = {
  loading: false,
  auth: LocalStorage.loadAuth()
};

export function sharedReducer(state = initialState, action: SharedActions) {
  switch (action.type) {
    case SharedActionsTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case SharedActionsTypes.SET_AUTH:
      LocalStorage.saveAuth(action.payload);
      return { ...state, auth: action.payload };

    default:
      return state;
  }
}

export const isLoading = (state: SharedState) => state.loading;
export const isAuth = (state: SharedState) => state.auth !== null;
export const getUser = (state: SharedState) => state.auth;
