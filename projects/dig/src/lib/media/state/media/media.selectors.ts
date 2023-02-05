import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMedia from './media.reducer';
import {Media} from '../../interfaces/media';

export const selectMediaState = createFeatureSelector<fromMedia.State>(
  fromMedia.mediaFeatureKey
);

export const selectMedia = createSelector(
  selectMediaState,
  state => ([...state.files])
)

export const selectRecentMedia = createSelector(
  selectMedia,
  media => media.slice(0,5)
)

export const selectMediaUpload = createSelector(
  selectMediaState,
  state => state.upload ? {...state.upload} : undefined
)

export const selectActiveMediaFile = createSelector(
  selectMediaState,
  state => state.activeFile ? {...state.files.find(f => f.id === state.activeFile)} as Media : undefined
)

export const selectMediaTags = createSelector(
  selectMedia,
  media => media ? Object.keys(media.reduce((tags: any, media) => {
    const mediaTags = media.tags ? [...media.tags] : [];
    mediaTags.forEach(tag => tags[tag] = true);
    return tags;
  }, {} as any)) : []
)
