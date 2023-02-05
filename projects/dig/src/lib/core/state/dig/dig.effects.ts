import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';

import {concatMap, map, mergeMap} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as DigActions from './dig.actions';
import {Store} from '@ngrx/store';
import {selectPanelState, selectUiState} from './dig.selectors';

@Injectable()
export class DigEffects {
  loadDig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DigActions.loadDig),
      map(() => {
        const json = localStorage.getItem('dig-ui-state');
        return DigActions.loadDigSuccess({persistedState: json ? JSON.parse(json) : {}})
      })
    );
  });
  persistUiState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DigActions.persistUiState),
      mergeMap(() => this.store.select(selectUiState).pipe(
        map(state => {
          localStorage.setItem('dig-ui-state', JSON.stringify(state))
          return DigActions.persistUiStateSuccess()
        })
      ))
    );
  });

  constructor(private actions$: Actions, private store: Store) {}
}
