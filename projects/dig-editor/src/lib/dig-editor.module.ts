import { NgModule } from '@angular/core';
import { DigEditorComponent } from './dig-editor.component';
import {ToolbarComponent} from './components/toolbar.component';
import {BodyComponent} from './components/body.component';
import {NodeComponent} from './components/node.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromEditor from './store/editor/editor.reducer';
import * as fromNode from './store/editor/node/node.reducer';
import {EffectsModule} from '@ngrx/effects';
import {EditorEffects} from './store/editor/editor.effects';
import {NodeEffects} from './store/editor/node/node.effects';



@NgModule({
  declarations: [
    DigEditorComponent
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    BodyComponent,
    NodeComponent,
    StoreModule.forFeature(fromEditor.editorFeatureKey, fromEditor.reducer),
    StoreModule.forFeature(fromNode.nodeFeatureKey, fromNode.reducer),
    EffectsModule.forFeature([EditorEffects, NodeEffects])
  ],
  exports: [
    DigEditorComponent
  ]
})
export class DigEditorModule { }
