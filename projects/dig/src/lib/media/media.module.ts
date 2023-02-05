import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaEffects } from './state/media/media.effects';
import * as fromMedia from './state/media/media.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMedia.mediaFeatureKey, fromMedia.reducer),
    EffectsModule.forFeature([
      MediaEffects,
    ])
  ]
})
export class MediaModule { }
