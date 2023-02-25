import { createAction, props } from '@ngrx/store';
import {Shortcut} from '../../interfaces/shortcut';

export const loadEditors = createAction(
  '[Editor] Load Editors'
);
export const addShortcut = createAction(
  '[Editor] Add Shortcut',
  props<{shortcut: Shortcut}>()
);
export const setShortcuts = createAction(
  '[Editor] Set Shortcuts',
  props<{shortcuts: Shortcut[]}>()
);




