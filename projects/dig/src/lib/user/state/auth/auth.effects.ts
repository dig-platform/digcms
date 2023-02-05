import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map, mergeMap, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as AuthActions from './auth.actions';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  loadAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadAuth),
    concatMap(() => this.auth.user().pipe(
      map(user => {
        if (user) {
          return AuthActions.loadAuthSuccess({data: user});
        } else {
          return AuthActions.loadAuthSuccess({data: undefined});
        }
      })
    ))
  ));

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signIn),
    concatMap(() => this.auth.googleSignIn()
      .pipe(
        map(user => {
          if (user) {
            return AuthActions.loadAuthSuccess({data: user});
          } else {
            return AuthActions.resetAuth();
          }
        }),
        catchError((error) => of(AuthActions.loadAuthFailure({error})))
      ))
  ));

  signOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signOut),
    concatMap(() => this.auth.signOut()
      .pipe(
        map(action => AuthActions.resetAuth()),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private auth: AuthService
  ) {}
}
