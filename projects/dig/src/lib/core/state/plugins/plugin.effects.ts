import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PluginActions from './plugin.actions';
import {PluginService} from '../../services/plugin.service';
import {loadDig} from '../dig/dig.actions';


@Injectable()
export class PluginEffects {

  loadPlugins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PluginActions.loadPlugins, loadDig),
      map(() => PluginActions.loadPluginsSuccess({plugins: this.pluginService.plugins}))
    );
  });


  constructor(private actions$: Actions, private pluginService: PluginService) {}
}
