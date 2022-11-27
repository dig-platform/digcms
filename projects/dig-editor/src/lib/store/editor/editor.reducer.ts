import { Action, createReducer, on } from '@ngrx/store';
import * as EditorActions from './editor.actions';
import {DigEditor} from '../../interfaces/dig-editor';

export const editorFeatureKey = 'editor';

export interface State extends DigEditor{

}

export const initialState: State = {
  nodes: []
};

export const reducer = createReducer(
  initialState,
  on(EditorActions.setNodes, (state, {nodes}) => ({...state, nodes: [...nodes]})),
);
