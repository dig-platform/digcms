import {Component, ViewChildren} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DigEditorNode} from './interfaces/dig-editor-node';
import {DigEditorService} from './dig-editor.service';
import {NodeComponent} from './components/node.component';
import {Store} from '@ngrx/store';
import {selectNodes} from './store/editor/editor.selectors';
import {deleteNode, setNodes} from './store/editor/editor.actions';

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
  readonly nodes$: Observable<DigEditorNode[]> = this.store.select(selectNodes);

  @ViewChildren(NodeComponent) nodes!: NodeComponent[];

  constructor(private store: Store) {
    this.store.dispatch(setNodes({nodes: [
        {
          format: 'h1',
          content: 'Welcome to the Dig Editor'
        },
        {
          format: 'p',
          content: 'This is some sample content'
        },
      ]}))
  }
}
