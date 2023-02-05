import { Action, createReducer, on } from '@ngrx/store';
import * as MediaActions from './media.actions';
import {Media, MediaUpload} from '../../interfaces/media';

export const mediaFeatureKey = 'media';

export interface State {
  files: Media[];
  activeFile: string | undefined;
  upload: MediaUpload | undefined;
}

export const initialState: State = {
  files: [],
  activeFile: undefined,
  upload: undefined
};

export const reducer = createReducer(
  initialState,
  on(MediaActions.loadMediaSuccess, (state, action) => ({
    ...state,
    files: [...action.data]
  })),
  on(MediaActions.loadMediaFailure, (state, action) => state),
  on(MediaActions.setActiveMediaFile, (state, {fileId}) => ({
    ...state,
    activeFile: fileId
  })),
  on(MediaActions.startMediaUpload, (state, {upload}) => ({...state, upload: {...upload}})),
  on(MediaActions.resetMediaUpload, (state) => ({...state, upload: undefined})),
  on(MediaActions.setUploadProgress, (state, {progress}) => ({...state, upload: state.upload ? {
      ...state.upload,
      progress
    } : undefined})),
);
