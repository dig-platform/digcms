import { Action, createReducer, on } from '@ngrx/store';
import * as ContentBlockActions from './content-block.actions';
import * as ContentNodeActions from '../../../page/state/content-nodes/content-node.actions';
import {ContentNode} from '../../../page/interfaces/content-node';
import {resetPageState} from '../../../page/state/pages/page.actions';

export const contentBlockFeatureKey = 'contentBlock';

export interface State {
  nodes: ContentNode[];
  activeId: string | undefined;
}

export const initialState: State = {
  nodes: [],
  activeId: undefined
};

export const reducer = createReducer(
  initialState,

  on(ContentBlockActions.loadContentBlocksSuccess, (state, {nodes}) => {
    let activeId = undefined;
    if (state.activeId) {
      activeId = state.activeId;
    } else if (nodes?.length > 0) {
      activeId = nodes ? nodes[0].id : undefined;
    }
    return {
      ...state,
      nodes: [...nodes],
      activeId
    }
  }),
  on(ContentBlockActions.setActiveContentBlock, (state, {blockId}) => ({...state, activeId: blockId})),
  on(ContentBlockActions.removeBlock, (state, {blockId}) => ({
    ...state,
    nodes: state.nodes.filter(n => n.id !== blockId),
    activeId: state.activeId === blockId ? undefined : state.activeId
  })),
  on(ContentBlockActions.resetActiveBlock, state => ({...state, activeId: undefined})),
);
