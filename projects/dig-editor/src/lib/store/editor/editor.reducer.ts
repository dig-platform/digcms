import { Action, createReducer, on } from '@ngrx/store';
import * as EditorActions from './editor.actions';
import {DigEditor} from '../../interfaces/dig-editor';

export const editorFeatureKey = 'editor';

export interface State extends DigEditor{

}

export const initialState: State = {
  status: '', toolbar: []
};

export const reducer = createReducer(
  initialState,

);
