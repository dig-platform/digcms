import { Action, createReducer, on } from '@ngrx/store';
import * as EditorActions from './editor.actions';
import {Shortcut} from '../../interfaces/shortcut';

export const editorFeatureKey = 'editor';

export interface State {
  page: any;
  status: string;
  panels: any[];
  shortcuts: Shortcut[];
}

export const initialState: State = {
  page: undefined,
  panels: [],
  status: '',
  shortcuts: []
};

export const reducer = createReducer(
  initialState,

  on(EditorActions.loadEditors, state => state),
  on(EditorActions.addShortcut, (state, {shortcut}) => ({
    ...state,
    shortcuts: [
      ...state.shortcuts,
      {...shortcut}
    ]
  })),
  on(EditorActions.setShortcuts, (state, {shortcuts}) => ({
    ...state,
    shortcuts: [...shortcuts]
  })),

);
