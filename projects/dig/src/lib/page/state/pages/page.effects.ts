import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';

import {concatMap, map, tap} from 'rxjs/operators';
import {Observable, EMPTY, take, from, first} from 'rxjs';
import * as PageActions from './page.actions';
import {PageService} from '../../services/page.service';
import {Page} from '../../interfaces/page';
import {loadDig} from '../../../core/state/dig/dig.actions';
import {Store} from '@ngrx/store';
import {selectActivePage} from './page.selectors';

@Injectable()
export class PageEffects {


  loadPages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.loadPages, loadDig),
      concatMap(() => this.pageService.getPages().pipe(
        map(pages => {
          return PageActions.loadPagesSuccess({pages})
        })
      ))
    );
  });

  loadPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.loadPage),
      concatMap(({pageId}) => this.pageService.getPage(pageId).pipe(
        take(1),
        map((page: Page) => PageActions.loadPageSuccess({page}))
      ))
    );
  });

  loadPageByPath$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageActions.loadPageByPath),
      concatMap(({path}) => this.pageService.getPageByPath(path).pipe(
        map((page: Page) => PageActions.loadPageSuccess({page}))
      ))
    );
  });
  //
  // savePage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(PageActions.savePage),
  //     concatLatestFrom(() => this.store.select(selectActivePage).pipe(take(1))),
  //     concatMap(([action, page]) => from(this.pageService.setPage(page as Page)).pipe(
  //       map((page: Page) => {
  //         console.log('saving');
  //         return PageActions.savePageSuccess({page});
  //       })
  //     ))
  //   );
  // });

  constructor(private actions$: Actions, private pageService: PageService, private store: Store) {}
}
