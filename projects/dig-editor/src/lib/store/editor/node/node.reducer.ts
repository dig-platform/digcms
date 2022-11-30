import { Action, createReducer, on } from '@ngrx/store';
import * as NodeActions from './node.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {DigEditorNode} from '../../../interfaces/dig-editor-node';
import {v4 as uuid} from 'uuid';

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
  on(NodeActions.setNodes, (state, {nodes}) => adapter.addMany(nodes, state)),
  on(NodeActions.setActiveNode, (state, {id}) => ({...state, selectedNodeId: id})),
  on(NodeActions.insertAfter, (state) => {
    const ids = [...state.ids] as string[];
    const currentIndex = ids.findIndex(id => id === getSelectedNodeId(state));
    const newNode = nodeFactory();
    ids.splice(currentIndex + 1, 0, newNode.id)
    return {
      ...state,
      entities: {...state.entities, [newNode.id]: newNode},
      ids: [...ids],
      selectedNodeId: newNode.id
    };
  }),
  on(NodeActions.deleteNode, (state, {id}) => {
    const ids = [...state.ids] as string[];
    const currentIndex = ids.findIndex(idx => idx === id);
    const previous = ids[currentIndex - 1];
    return {
      ...adapter.removeOne(id, state),
      selectedNodeId: previous
    }
  }),
  on(NodeActions.nextNode, state => {
    const ids = [...state.ids] as string[];
    const currentIndex = ids.findIndex(id => id === getSelectedNodeId(state));
    const next = ids[currentIndex + 1];
    return {
      ...state,
      selectedNodeId: next
    }
  }),
  on(NodeActions.previousNode, state => {
    const ids = [...state.ids] as string[];
    const currentIndex = ids.findIndex(id => id === getSelectedNodeId(state));
    const next = ids[currentIndex - 1];
    return {
      ...state,
      selectedNodeId: next
    }
  }),
  on(NodeActions.formatNode, (state, {format}) => {
    let newState = {...state};
    const selectedNode = newState.selectedNodeId;
    if (selectedNode ) {
      // update the selected node
      // fuck you typescript!!!!!!!!!!!
      // @ts-ignore
      newState.entities = {
        ...newState.entities,
        [selectedNode]: {
          ...newState.entities[selectedNode],
          format
        }
      }
    } else {
      // add a new node
      const newNode = nodeFactory(format);
      newState = adapter.addOne(newNode, newState);
      console.log(newNode, newState);
    }
    return newState;
  })
);

export const nodeFactory = (format: string = 'p'): DigEditorNode => ({
  id: uuid() + '',
  content: '',
  format
})

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
