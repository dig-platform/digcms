import {createFeatureSelector, createSelector, select} from '@ngrx/store';
import * as fromPost from './post.reducer';
import {Post} from '../../interfaces/blog';

export const selectPostState = createFeatureSelector<fromPost.State>(
  fromPost.postFeatureKey
);

export const selectPosts = createSelector(
  selectPostState,
  state => ([...state.posts])
)

export const selectRecentPosts = createSelector(
  selectPosts,
  // todo sort these by date first
  posts => (posts.slice(0,5))
)
export const selectActivePost = createSelector(
  selectPostState,
  state => state.activePost ? {...state.posts.find(p => p.id === state.activePost)} as Post : undefined
)


