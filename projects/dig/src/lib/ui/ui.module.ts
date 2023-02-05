import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {EditorEffects} from './state/editor/editor.effects';
import {StoreModule} from '@ngrx/store';
import * as fromEditor from './state/editor/editor.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      EditorEffects,
    ]),
    StoreModule.forFeature(fromEditor.editorFeatureKey, fromEditor.reducer),
  ]
})
export class UiModule { }
