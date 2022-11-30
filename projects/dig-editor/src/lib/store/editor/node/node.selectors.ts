import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as FromNode from './node.reducer';
import {getNodeIndex} from './node.reducer';

export const selectNodeState = createFeatureSelector<FromNode.State>(
  FromNode.nodeFeatureKey
);
export const selectAllNodes = createSelector(
  selectNodeState,
  state => [...state.nodes]
);
export const selectCurrentNode = createSelector(
  selectNodeState,
  state => ({...state.nodes[getNodeIndex(state.selectedNodeId, state)]})
);
