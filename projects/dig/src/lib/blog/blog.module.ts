import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { PostEffects } from './state/blog/post.effects';
import * as fromPost from './state/blog/post.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([PostEffects]),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
  ]
})
export class BlogModule { }
