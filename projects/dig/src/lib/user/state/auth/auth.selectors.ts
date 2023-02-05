import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectIdentity = createSelector(
  selectAuthState,
  state => state.identity ? {...state.identity} : undefined
);

export const hasIdentity = createSelector(
  selectAuthState,
  (state) => !! state.identity?.uid
);
