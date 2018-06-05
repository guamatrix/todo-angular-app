import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { State, SharedState } from './shared/models/States';

import * as fromShared from './shared/store/shared.reducers';

export const reducers: ActionReducerMap<State> = {
  shared: fromShared.sharedReducer
};

export const getSharedState = createFeatureSelector<SharedState>('shared');
export const getIsLoading = createSelector(getSharedState, fromShared.isLoading);
export const getIsAuth = createSelector(getSharedState, fromShared.isAuth);
export const getUser = createSelector(getSharedState, fromShared.getUser);
