import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
  selectUserState,
  state => ([...state.users])
)

export const selectRecentUsers = createSelector(
  selectUserState,
  state => {
    const users = [...state.users];
    return users;
  }
)

export const selectActiveUser = createSelector(
  selectUserState,
  state => state.activeUser ? {...state.users.find(u => u.uid === state.activeUser)} : undefined
)
