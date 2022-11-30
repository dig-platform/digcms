import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as EditorActions from './editor.actions';
import * as NodeActions from './node/node.actions';

@Injectable()
export class EditorEffects {


  loadDemo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditorActions.loadDemo),
      map(() => NodeActions.setNodes({nodes:
        [
          {
            id: 'headline',
            content: 'DigEditor',
            format: 'h1',
            position: 0
          },
          {
            id: 'description',
            content: 'Reactive Angular editor',
            format: 'paragraph',
            position: 1
          },
        ]
      }))
    );
  });

  constructor(private actions$: Actions) {}
}
