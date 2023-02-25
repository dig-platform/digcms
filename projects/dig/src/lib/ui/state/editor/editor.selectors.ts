import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEditor from './editor.reducer';

export const selectEditorState = createFeatureSelector<fromEditor.State>(
  fromEditor.editorFeatureKey
);

export const selectEditorTitle = createSelector(
  selectEditorState,
  state => state.title + ''
)

export const selectShortcuts = createSelector(
  selectEditorState,
  state => ([...state.shortcuts])
)
