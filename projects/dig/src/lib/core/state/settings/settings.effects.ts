import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';

import {concatMap, map, tap} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as SettingsActions from './settings.actions';
import {DataService} from '../../services/data.service';
import {Store} from '@ngrx/store';
import {selectSettings, selectSettingsState} from './settings.selectors';
import {Settings} from '../../interfaces/settings';
import {loadDig} from '../dig/dig.actions';

@Injectable()
export class SettingsEffects {
  loadSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SettingsActions.loadSettings, loadDig),
      concatMap(() => this.dataService.getSettings().pipe(
        map((settings: Settings) => SettingsActions.loadSettingsSuccess({settings}))
      )
    ));
  });
  saveSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SettingsActions.saveSettings),
      concatLatestFrom(() => this.store.select(selectSettings)),
      concatMap(([action, settings]) => this.dataService.setSettings(settings as Settings).pipe(
        map(settings => SettingsActions.saveSettingsSuccess())
      )
    ));
  });

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store
  ) {}
}
