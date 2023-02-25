import { createAction, props } from '@ngrx/store';
import {Shortcut} from '../../interfaces/shortcut';

export const loadEditor = createAction(
  '[Editor] Load Editor'
);
export const mergeEditorState = createAction(
  '[Editor] Merge Editor State',
  // todo move editor state interface to a separate file so we can type this
  props<{patch: any}>()
);
export const addShortcut = createAction(
  '[Editor] Add Shortcut',
  props<{shortcut: Shortcut}>()
);
export const setShortcuts = createAction(
  '[Editor] Set Shortcuts',
  props<{shortcuts: Shortcut[]}>()
);




