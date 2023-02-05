import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  identity: {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
    phoneNumber: string;
  } | undefined;
  error: any;
}

export const initialState: State = {
  identity: undefined,
  error: undefined
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadAuthSuccess, (state, {data}) => ({...state, identity: data ? {...data} : undefined})),
  on(AuthActions.loadAuthFailure, (state, {error}) => ({...state, error})),
  on(AuthActions.resetAuth, (state) => ({...state, identity: undefined})),
);
