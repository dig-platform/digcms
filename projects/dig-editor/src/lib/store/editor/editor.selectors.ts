import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEditor from './editor.reducer';

export const selectEditorState = createFeatureSelector<fromEditor.State>(
  fromEditor.editorFeatureKey
);

export const selectNodes = createSelector(
  selectEditorState,
  state => [...state.nodes]
)
