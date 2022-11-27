import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNode from './node.reducer';

export const selectNodeState = createFeatureSelector<fromNode.State>(
  fromNode.nodeFeatureKey
);

export const selectNodeIds = createSelector(
  selectNodeState,
  fromNode.selectNodeIds // shorthand for NodesState => fromNode.selectNodeIds(NodesState)
);
export const selectNodeEntities = createSelector(
  selectNodeState,
  fromNode.selectNodeEntities
);
export const selectAllNodes = createSelector(
  selectNodeState,
  fromNode.selectAllNodes
);
export const selectNodeTotal = createSelector(
  selectNodeState,
  fromNode.selectNodeTotal
);
export const selectCurrentNodeId = createSelector(
  selectNodeState,
  fromNode.getSelectedNodeId
);

export const selectCurrentNode = createSelector(
  selectNodeEntities,
  selectCurrentNodeId,
  (NodeEntities, NodeId) => NodeId && NodeEntities[NodeId]
);
