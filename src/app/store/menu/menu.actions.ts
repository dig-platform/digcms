import { createAction, props } from '@ngrx/store';
import {Menu} from '../../interfaces/menu';

export const loadMenu = createAction(
  '[Menu] Load Menu'
);
export const resetMenu = createAction(
  '[Menu] Reset Menu'
);
export const createMenu = createAction(
  '[Menu] Create Menu',
  props<{name: string}>()
);
export const createMenuSuccess = createAction(
  '[Menu] Create Menu Success',
  props<{menu: Menu}>()
);
export const createMenuFailure = createAction(
  '[Menu] Create Menu Failure',
  props<{error: any}>()
);




