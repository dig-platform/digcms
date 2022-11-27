import { Action, createReducer, on } from '@ngrx/store';
import * as NodeActions from './node.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {DigEditorNode} from '../../../interfaces/dig-editor-node';

export const nodeFeatureKey = 'node';

export interface State extends EntityState<DigEditorNode>{
  selectedNodeId: string | null;
  selectedNodes: string[];
}

export function sortByPosition(a: DigEditorNode, b: DigEditorNode) {
  const position = (node: DigEditorNode) => node.position ? node.position : -1;
  return position(a) - position(b);
}

export const adapter: EntityAdapter<DigEditorNode> =
  createEntityAdapter<DigEditorNode>({
    sortComparer: sortByPosition
  })

export const initialState: State =
  adapter.getInitialState({
    selectedNodeId: null,
    selectedNodes: []
  })

export const reducer = createReducer(
  initialState,
  on(NodeActions.setNodes, (state, {nodes}) => adapter.addMany(nodes, state))
);

export const getSelectedNodeId = (state: State) => state.selectedNodeId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Node ids
export const selectNodeIds = selectIds;

// select the dictionary of Node entities
export const selectNodeEntities = selectEntities;

// select the array of Nodes
export const selectAllNodes = selectAll;

// select the total Node count
export const selectNodeTotal = selectTotal;
