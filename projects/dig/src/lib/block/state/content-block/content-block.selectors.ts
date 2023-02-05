import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContentBlock from './content-block.reducer';

export const selectContentBlockState = createFeatureSelector<fromContentBlock.State>(
  fromContentBlock.contentBlockFeatureKey
);

export const selectContentBlocks = createSelector(
  selectContentBlockState,
  state => ([...state.nodes])
)

export const selectActiveContentBlock = createSelector(
  selectContentBlockState,
  state => state.activeId ? {...state.nodes.find(n => n.id === state.activeId)} : undefined
)
