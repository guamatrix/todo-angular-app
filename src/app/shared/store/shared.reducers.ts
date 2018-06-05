import * as Actions from './shared.actions';

import { SharedState } from '../models/States';

const initialState: SharedState = {
  loading: false,
  auth: null
};

export function sharedReducer(state = initialState, action: Actions.SharedActions) {
  switch (action.type) {
    case Actions.SET_LOADING:
      return { ...state, loading: action.payload };

    case Actions.SET_AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
}

export const isLoading = (state: SharedState) => state.loading;
export const isAuth = (state: SharedState) => state.auth !== null;
export const getUser = (state: SharedState) => state.auth;
