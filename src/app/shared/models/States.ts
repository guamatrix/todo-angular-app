import { User } from './interfaces';

export interface SharedState {
  loading: boolean;
  auth: User;
}

export interface State {
  shared: SharedState;
}
