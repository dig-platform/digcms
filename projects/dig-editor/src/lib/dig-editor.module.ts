import { NgModule } from '@angular/core';
import { DigEditorComponent } from './dig-editor.component';
import {ToolbarComponent} from './components/toolbar.component';
import {BodyComponent} from './components/body.component';
import {NodeComponent} from './components/node.component';
import {CommonModule} from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { EditorEffects } from './store/editor/editor.effects';
import {StoreModule} from '@ngrx/store';
import {editorFeatureKey, reducer} from './store/editor/editor.reducer';



@NgModule({
  declarations: [
    DigEditorComponent
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    BodyComponent,
    NodeComponent,
    StoreModule.forFeature(editorFeatureKey, reducer),
    EffectsModule.forFeature([EditorEffects])
  ],
  exports: [
    DigEditorComponent
  ]
})
export class DigEditorModule { }
