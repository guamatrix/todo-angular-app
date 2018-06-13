import { Action } from '@ngrx/store';

import { User } from '../models/interfaces';

export enum SharedActionsTypes {
  SET_LOADING = '[SHARED] set loading',
  SET_AUTH = '[SHARED] set auth'
}

export class SetLoading implements Action {
  readonly type = SharedActionsTypes.SET_LOADING;
  constructor(public payload: boolean) {}
}

export class SetAuth implements Action {
  readonly type = SharedActionsTypes.SET_AUTH;
  constructor(public payload: User) {}
}

export type SharedActions = SetAuth | SetLoading;
