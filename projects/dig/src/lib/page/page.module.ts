import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentNodeEffects } from './state/content-nodes/content-node.effects';
import * as fromContentNodeReducer from './state/content-nodes/content-node.reducer';
import {PageEffects} from './state/pages/page.effects';
import * as fromPageReducer from './state/pages/page.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPageReducer.pageFeatureKey, fromPageReducer.reducer),
    StoreModule.forFeature(fromContentNodeReducer.contentNodeFeatureKey, fromContentNodeReducer.reducer),
    EffectsModule.forFeature([
      PageEffects,
      ContentNodeEffects,
    ])
  ]
})
export class PageModule { }
