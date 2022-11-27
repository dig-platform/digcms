import { createAction, props } from '@ngrx/store';
import {DigEditorNode} from '../../../interfaces/dig-editor-node';

export const setNodes = createAction(
  '[Editor] Set Nodes',
  props<{nodes: DigEditorNode[]}>()
)

export const setNode = createAction(
  '[Editor] Set Node',
  props<{node: DigEditorNode[], position: number}>()
)

export const addNode = createAction(
  '[Editor] Add Node',
  props<{node: DigEditorNode, position?: number}>()
)

export const deleteNode = createAction(
  '[Editor] Delete Node',
  props<{position?: number}>()
)

export const nextNode = createAction(
  '[Editor] Next Node'
)

export const previousNode = createAction(
  '[Editor] Previous Node'
)



