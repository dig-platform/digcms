import { createAction, props } from '@ngrx/store';

export const loadContentBlocks = createAction(
  '[ContentBlock] Load ContentBlocks'
);
export const loadContentBlocksSuccess = createAction(
  '[ContentBlock] Load ContentBlocks Success',
  props<{ nodes: any }>()
);
export const setActiveContentBlock = createAction(
  '[ContentBlock] Set Active Content Block',
  props<{blockId: string}>()
);
export const removeBlock = createAction(
  '[ContentBlock] Remove Block',
  props<{blockId: string}>()
);
export const resetActiveBlock = createAction(
  '[ContentBlock] reset Active Block'
);




