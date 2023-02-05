import { Action, createReducer, on } from '@ngrx/store';
import * as EditorActions from './editor.actions';

export const editorFeatureKey = 'editor';

export interface State {
  page: any;
  status: string;
  panels: any[];
}

export const initialState: State = {
  page: undefined,
  panels: [],
  status: ''
};

export const reducer = createReducer(
  initialState,

  on(EditorActions.loadEditors, state => state),

);
