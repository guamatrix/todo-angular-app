import { Action } from '@ngrx/store';

import { User } from '../models/interfaces';

export const SET_LOADING = '[SHARED] set loading';
export const SET_AUTH = '[SHARED] set auth';

export class SetLoading implements Action {
  readonly type = SET_LOADING;
  constructor(public payload: boolean) {}
}

export class SetAuth implements Action {
  readonly type = SET_AUTH;
  constructor(public payload: User) {}
}

export type SharedActions = SetAuth | SetLoading;
