import { Action, createReducer, on } from '@ngrx/store';
import * as NodeActions from './node.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {DigEditorNode} from '../../../interfaces/dig-editor-node';
import {v4 as uuid} from 'uuid';

export const nodeFeatureKey = 'node';

export interface State {
  nodes: DigEditorNode[];
  selectedNodeId: string | null;
}

export const initialState: State = {
  nodes: [],
  selectedNodeId: null
}

export const reducer = createReducer(
  initialState,
  on(NodeActions.setNodes, (state, {nodes}) => ({...state, nodes: [...nodes]})),
  on(NodeActions.setActiveNode, (state, {id}) => ({...state, selectedNodeId: id})),
  on(NodeActions.insertBefore, (state, {id}) => {
    const index = getNodeIndex(id, state) - 1;
    const nodes = [...state.nodes];
    nodes.splice(index, 0, nodeFactory());
    return {
      ...state,
      nodes
    };
  }),
  on(NodeActions.insertAfter, (state, {id}) => {
    const active = id ? id : state.selectedNodeId;
    const index = getNodeIndex(active, state);
    const nodes = [...state.nodes];
    const newNode = nodeFactory();
    nodes.splice(index + 1, 0, newNode);
    return {
      ...state,
      nodes,
      selectedNodeId: newNode.id
    };
  }),
  on(NodeActions.deleteNode, (state, {id}) => {
    const index = getNodeIndex(id, state);
    const active = index > 0 ? index - 1 : index + 1;
    const nodes = [...state.nodes];
    const activeNode = nodes[active];
    nodes.splice(index, 1);
    return {
      ...state,
      nodes,
      selectedNodeId: activeNode.id
    };
  }),
  on(NodeActions.nextNode, state => {
    const index = getNodeIndex(state.selectedNodeId, state);
    const next = state.nodes[index + 1];
    return {
      ...state,
      selectedNodeId: next ? next.id : null
    }
  }),
  on(NodeActions.previousNode, state => {
    const index = getNodeIndex(state.selectedNodeId, state);
    const next = state.nodes[index - 1];
    return {
      ...state,
      selectedNodeId: next ? next.id : null
    }
  }),
  on(NodeActions.formatNode, (state, {format, id}) => {
    const active = id ? id : state.selectedNodeId;
    const node = {...state.nodes[getNodeIndex(active, state)], format};
    return patchNode(node, state);
  })
);

export const nodeFactory = (format: string = 'p'): DigEditorNode => ({
  id: uuid() + '',
  content: '',
  format
})

export const getNodeIndex = (id: string | null | undefined, state: State) => {
  return id ? state.nodes.findIndex(n => n.id === id) : -1;
}

export const patchNode = (node: DigEditorNode, state: State) => {
  const index = getNodeIndex(node.id, state);
  const nodes = [...state.nodes];
  nodes[index] = {...nodes[index], ...node};
  return {
    ...state,
    nodes
  }
}
