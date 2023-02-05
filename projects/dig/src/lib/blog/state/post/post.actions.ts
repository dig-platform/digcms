import { createAction, props } from '@ngrx/store';
import {Post} from '../../interfaces/blog';

export const loadPosts = createAction(
  '[Post] Load Posts'
);
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{posts: Post[]}>()
);
export const setActivePost = createAction(
  '[Post] Set Active Post',
  props<{postId: string}>()
);




