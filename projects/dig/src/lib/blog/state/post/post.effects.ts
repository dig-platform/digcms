import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as PostActions from './post.actions';
import {BlogService} from '../../services/blog.service';
import {loadDig} from '../../../core/state/dig/dig.actions';

@Injectable()
export class PostEffects {


  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts, loadDig),
      concatMap(() => this.blogService.getPosts().pipe(
        map(posts => PostActions.loadPostsSuccess({posts}))
      ))
    );
  });

  constructor(private actions$: Actions, private blogService: BlogService) {}
}
