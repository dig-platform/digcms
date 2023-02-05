import { createAction, props } from '@ngrx/store';
import {MediaUpload} from '../../interfaces/media';

export const loadMedia = createAction(
  '[Media] Load Media'
);

export const loadMediaSuccess = createAction(
  '[Media] Load Media Success',
  props<{ data: any }>()
);

export const loadMediaFailure = createAction(
  '[Media] Load Media Failure',
  props<{ error: any }>()
);

export const setActiveMediaFile = createAction(
  '[Media] Set Active File',
  props<{ fileId: string }>()
);

export const startMediaUpload = createAction(
  '[Media] Start Upload',
  props<{ upload: MediaUpload }>()
);

export const setUploadProgress = createAction(
  '[Media] Set Upload Progress',
  props<{ progress: number }>()
);

export const resetMediaUpload = createAction(
  '[Media] Reset Upload'
);
