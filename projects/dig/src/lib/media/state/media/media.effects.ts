import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {Observable, EMPTY, of, from} from 'rxjs';
import * as MediaActions from './media.actions';
import {MediaService} from '../../services/media.service';
import {loadDig} from '../../../core/state/dig/dig.actions';


@Injectable()
export class MediaEffects {

  loadMedia$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MediaActions.loadMedia, loadDig),
      concatMap(() => this.mediaService.getUploads().pipe(
        map(data => MediaActions.loadMediaSuccess({ data }))
      ))
    );
  });


  constructor(private actions$: Actions, private mediaService: MediaService) {}
}
