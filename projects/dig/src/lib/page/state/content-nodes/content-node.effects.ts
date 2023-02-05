import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import {Observable, EMPTY, of, take, from} from 'rxjs';
import * as ContentNodeActions from './content-node.actions';
import * as PageActions from '../pages/page.actions';
import {ContentNodeService} from '../../services/content-node.service';
import {Store} from '@ngrx/store';
import {selectActiveContentNode} from './content-node.selectors';
import {ContentNode} from '../../interfaces/content-node';
import {loadDig} from '../../../core/state/dig/dig.actions';


@Injectable()
export class ContentNodeEffects {

  loadPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.loadPageSuccess, ContentNodeActions.loadContentNodesForPage),
      concatMap((action: any) => {
        const pageId = action.pageId ? action.pageId : action.page.id;
        return this.nodeService.getPageNodes(pageId).pipe(
          map((nodes) => ContentNodeActions.loadContentNodesSuccess({nodes}))
        )
      })
    );
  });


  constructor(private actions$: Actions, private nodeService: ContentNodeService, private store: Store) {}
}
