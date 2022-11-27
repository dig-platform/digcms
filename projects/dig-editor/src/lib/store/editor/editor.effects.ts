import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as EditorActions from './editor.actions';

@Injectable()
export class EditorEffects {


  loadEditors$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(EditorActions.loadEditors),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
