import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import {Post} from '../../interfaces/blog';

export const postFeatureKey = 'post';

export interface State {
  posts: Post[];
  activePost: string | undefined;
}

export const initialState: State = {
  posts: [],
  activePost: undefined
};

export const reducer = createReducer(
  initialState,
  on(PostActions.loadPosts, state => state),
  on(PostActions.loadPostsSuccess, (state, {posts}) => ({...state, posts: [...posts]})),
  on(PostActions.setActivePost, (state, {postId}) => ({...state, activePost: postId})),
);
