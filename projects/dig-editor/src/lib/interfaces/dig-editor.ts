import {DigEditorNode} from './dig-editor-node';

export interface DigEditor {
  id?: string;
  nodes: DigEditorNode[];
  activeNode?: number;
}
