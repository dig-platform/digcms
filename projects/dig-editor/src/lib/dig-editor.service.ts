import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {DigEditor} from './interfaces/dig-editor';
import {DigEditorNode} from './interfaces/dig-editor-node';

// todo i am doing this as a singleton, but it needs to support multiple editor instances

@Injectable({
  providedIn: 'root'
})
export class DigEditorService {
  private editor: BehaviorSubject<DigEditor> = new BehaviorSubject<DigEditor>({
    nodes: [
      {
        format: 'p',
        content: ''
      }
    ]
  });

  readonly nodes$ = this.editor.asObservable().pipe(
    map(editor => [...editor.nodes])
  )

  constructor() { }

  setNodes(nodes: DigEditorNode[]) {
    this.editor.next({...this.editor.getValue(), nodes: [...nodes]});
  }

  addNode(data: Partial<DigEditorNode>) {
    const node: DigEditorNode = {
      format: 'p',
      content: '',
      ...data
    }
    const state = this.editor.getValue();
    const nodes = [...state.nodes, node];
    this.editor.next({
      ...state,
      nodes
    });
  }

  deleteNodeByIndex(index: number) {
    const state = this.editor.getValue();
    const nodes = [...state.nodes];
    nodes.splice(index, 1);
    this.editor.next({
      ...state,
      nodes
    });
  }

}
