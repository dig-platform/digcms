import { Action, createReducer, on } from '@ngrx/store';
import * as EditorActions from './editor.actions';
import {Shortcut} from '../../interfaces/shortcut';

export const editorFeatureKey = 'editor';

export interface State {
  title: string;
  page: any;
  status: string;
  panels: any[];
  shortcuts: Shortcut[];
}

export const initialState: State = {
  title: 'Digitalus CMS',
  page: undefined,
  panels: [],
  status: '',
  shortcuts: []
};

export const reducer = createReducer(
  initialState,
  on(EditorActions.mergeEditorState, (state, {patch}) => {
    const title = patch.title ? patch.title : state.title;
    let shortcuts: Shortcut[] = [];
    if (patch.shortcuts) {
      const newShortcuts = [...patch.shortcuts];
      const existingShortcuts = [...state.shortcuts];
      const shortcutMap = [
        ...state.shortcuts,
        ...patch.shortcuts,
      ].reduce((map, shortcut) => {
        return {
          ...map,
          [shortcut.path]: {...shortcut}
        }
      }, {} as {[path: string]: Shortcut})
      shortcuts = Object.values(shortcutMap);
    }
    return {
      ...state,
      title,
      shortcuts
    };
  }),
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
