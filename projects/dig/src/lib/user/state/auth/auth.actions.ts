import { createAction, props } from '@ngrx/store';

export const loadAuth = createAction(
  '[Auth] Load Auth'
);

export const loadAuthSuccess = createAction(
  '[Auth] Load Auth Success',
  props<{ data: any }>()
);

export const loadAuthFailure = createAction(
  '[Auth] Load Auth Failure',
  props<{ error: any }>()
);

export const signIn = createAction(
  '[Auth] SignIn'
);

export const signOut = createAction(
  '[Auth] SignOut'
);

export const resetAuth = createAction(
  '[Auth] Reset'
);
