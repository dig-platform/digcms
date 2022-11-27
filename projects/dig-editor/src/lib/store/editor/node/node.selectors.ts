import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as FromNode from './node.reducer';

export const selectNodeState = createFeatureSelector<FromNode.State>(
  FromNode.nodeFeatureKey
);

export const selectNodeIds = createSelector(
  selectNodeState,
  FromNode.selectNodeIds // shorthand for NodesState => FromNode.selectNodeIds(NodesState)
);
export const selectNodeEntities = createSelector(
  selectNodeState,
  FromNode.selectNodeEntities
);
export const selectAllNodes = createSelector(
  selectNodeState,
  FromNode.selectAllNodes
);
export const selectNodeTotal = createSelector(
  selectNodeState,
  FromNode.selectNodeTotal
);
export const selectCurrentNodeId = createSelector(
  selectNodeState,
  FromNode.getSelectedNodeId
);

export const selectCurrentNode = createSelector(
  selectNodeEntities,
  selectCurrentNodeId,
  (NodeEntities, NodeId) => NodeId && NodeEntities[NodeId]
);
