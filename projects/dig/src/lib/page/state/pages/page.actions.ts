import { createAction, props } from '@ngrx/store';
import {Page} from '../../interfaces/page';


export const loadPages = createAction(
  '[Page] Load Pages'
);

export const loadPagesSuccess = createAction(
  '[Page] Load Pages Success',
  props<{pages: Page[]}>()
);

export const loadPage = createAction(
  '[Page] Load Page',
  props<{pageId: string}>()
);

export const loadPageByPath = createAction(
  '[Page] Load Page By Path',
  props<{path: string}>()
);

export const loadPageSuccess = createAction(
  '[Page] Load Page Success',
  props<{page: Page}>()
);


export const resetPageState = createAction(
  '[Page] Reset Page State'
);
