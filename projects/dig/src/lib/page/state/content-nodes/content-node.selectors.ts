import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContentNode from './content-node.reducer';
import {ContentNode} from '../../interfaces/content-node';

export const selectContentNodeState = createFeatureSelector<fromContentNode.State>(
  fromContentNode.contentNodeFeatureKey
);

export const selectContentNodes = createSelector(
  selectContentNodeState,
  state => state.nodes ? [...state.nodes].sort((a: ContentNode, b: ContentNode) => {
    const posA = Number.isNaN(a?.position) ? state.nodes.length + 1 : a.position;
    const posB = Number.isNaN(b?.position) ? state.nodes.length + 1 : b.position;
    // @ts-ignore
    // this is a fucking number typescript!!!
    return posA - posB;
  }) : []
)

export const selectActiveContentNode = createSelector(
  selectContentNodeState,
  state => state.activeNode ? {...state.activeNode} : undefined
)

export const selectActiveNodeSettings = createSelector(
  selectActiveContentNode,
  node => {
    if (! node) {
      return;
    }
    const activeNode = {...node};
    delete activeNode.content;
    return activeNode;
  }
)

export const selectActiveNodeContent = createSelector(
  selectActiveContentNode,
  node => node ? {...node.content} : undefined
)

export const selectContentMap = createSelector(
  selectContentNodes,
  nodes => nodes?.length !> 0 ? nodes.reduce((map: any, node: ContentNode) => {
      return {
        ...map,
        [node.name as string]: {...node.content}
      }
    }, {} as any) : undefined
)
