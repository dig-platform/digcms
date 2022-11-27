import {Component, ViewChildren} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DigEditorNode} from './interfaces/dig-editor-node';

import {NodeComponent} from './components/node.component';
import {Store} from '@ngrx/store';
import * as editorActions from './store/editor/editor.actions';
import * as nodeActions from './store/editor/node/node.actions';
import * as nodeSelectors from './store/editor/node/node.selectors';

@Component({
  selector: 'dig-editor',
  template: `
    <div class="dig-editor">
      <dig-editor-toolbar></dig-editor-toolbar>
      <dig-editor-body>
        <dig-editor-node
          *ngFor="let node of nodes$ | async; let i = index;"
          [node]="node"
        ></dig-editor-node>
      </dig-editor-body>
    </div>
  `,
  styles: [
  ]
})
export class DigEditorComponent {
  readonly nodes$: Observable<DigEditorNode[]> = this.store.select(nodeSelectors.selectAllNodes);

  @ViewChildren(NodeComponent) nodes!: NodeComponent[];

  constructor(private store: Store) {
    this.store.dispatch(editorActions.loadDemo());
  }
}
