import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {User} from '../../interfaces/user';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  activeUser: string | undefined;
}

export const initialState: State = {
  users: [],
  activeUser: undefined
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, {users}) => ({...state, users: [...users]})),
  on(UserActions.loadUsersFailure, (state, action) => state),
  on(UserActions.setActiveUser, (state, {uid}) => ({...state, activeUser: uid})),
);
