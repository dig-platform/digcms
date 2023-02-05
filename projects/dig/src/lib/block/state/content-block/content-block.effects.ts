import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ContentBlockActions from './content-block.actions';
import {loadDig} from '../../../core/state/dig/dig.actions';
import * as ContentNodeActions from '../../../page/state/content-nodes/content-node.actions';
import {ContentNodeService} from '../../../page/services/content-node.service';
import {Store} from '@ngrx/store';

@Injectable()
export class ContentBlockEffects {


  loadContentBlocks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(loadDig, ContentBlockActions.loadContentBlocks),
      concatMap(() => {
        return this.nodeService.getNodesByScope('global').pipe(
          map((nodes) => ContentBlockActions.loadContentBlocksSuccess({nodes}))
        )
      })
    );
  });
  constructor(private actions$: Actions, private nodeService: ContentNodeService, private store: Store) {}
}
