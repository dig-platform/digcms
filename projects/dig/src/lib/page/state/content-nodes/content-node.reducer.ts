import { Action, createReducer, on } from '@ngrx/store';
import * as ContentNodeActions from './content-node.actions';
import {ContentNode} from '../../interfaces/content-node';
import {resetPageState} from '../pages/page.actions';

export const contentNodeFeatureKey = 'contentNode';

export interface State {
  nodes: ContentNode[];
  activeNode: ContentNode | undefined
}

export const initialState: State = {
  nodes: [],
  activeNode: undefined
};

export const reducer = createReducer(
  initialState,
  on(ContentNodeActions.loadContentNodesSuccess, (state, {nodes}) => {
    let activeNode = undefined;
    if (state.activeNode) {
      activeNode = state.activeNode;
    } else if (nodes?.length > 0) {
      activeNode = {...nodes[0]};
    }
    return {
      ...state,
      nodes,
      activeNode
    }
  }),
  on(ContentNodeActions.loadContentNodesFailure, (state, action) => state),
  on(ContentNodeActions.setActiveNode, (state, {node}) => ({...state, activeNode: {...node}})),
  on(ContentNodeActions.resetActiveNode, (state) => ({...state, activeNode: {...state.nodes[0]}})),
  on(ContentNodeActions.removeNode, (state, {nodeId}) => ({
    ...state,
    nodes: state.nodes.filter(n => n.id !== nodeId),
    activeNode: state.activeNode?.id === nodeId ? undefined : state.activeNode
  })),
  on(resetPageState, state => ({...initialState})),
);
