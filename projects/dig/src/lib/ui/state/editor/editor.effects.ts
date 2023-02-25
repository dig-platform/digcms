import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import {Observable, EMPTY, map} from 'rxjs';
import * as EditorActions from './editor.actions';
import {Dig, DigConfig} from '../../../dig';
import {mergeEditorState} from './editor.actions';

@Injectable()
export class EditorEffects {


  loadEditor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditorActions.loadEditor),
      map(() => {
        const config = {...this.dig.config};
        const patch = config.editor ? {...config.editor} : {};
        return mergeEditorState({patch})
      })
    );
  });

  constructor(private actions$: Actions, private dig: Dig) {}
}
