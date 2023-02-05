import { createAction, props } from '@ngrx/store';
import {ContentNode} from '../../interfaces/content-node';



export const loadContentNodes = createAction(
  '[ContentNode] Load ContentNodes',
);
export const loadContentNodesForPage = createAction(
  '[ContentNode] Load ContentNodes For Page',
  props<{ pageId: string }>()
);

export const loadGlobalNodes = createAction(
  '[ContentNode] Load GlobalNodes',
);

export const loadGlobalNodesSuccess = createAction(
  '[ContentNode] Load GlobalNodes Success',
  props<{ nodes: any }>()
);

export const loadContentNodesSuccess = createAction(
  '[ContentNode] Load ContentNodes Success',
  props<{ nodes: any }>()
);

export const loadContentNodesFailure = createAction(
  '[ContentNode] Load ContentNodes Failure',
  props<{ error: any }>()
);

export const setActiveNode = createAction(
  '[ContentNode] Set Active Node',
  props<{ node: ContentNode }>()
);

// sets the first node as the active node
export const resetActiveNode = createAction(
  '[ContentNode] Reset Active Node'
);

export const removeNode = createAction(
  '[ContentNode] Remove Node',
  props<{ nodeId: string }>()
);
