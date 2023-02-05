import { createAction, props } from '@ngrx/store';
import {User} from '../../interfaces/user';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const setActiveUser = createAction(
  '[User] Set Active User',
  props<{ uid: string }>()
);
