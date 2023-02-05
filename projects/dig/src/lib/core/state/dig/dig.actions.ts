import { createAction, props } from '@ngrx/store';

export const loadDig = createAction(
  '[Dig] Load Dig'
);
export const loadDigSuccess = createAction(
  '[Dig] Load Dig Success',
  props<{persistedState: any}>()
);
export const setPanel = createAction(
  '[Dig] Set Panel',
  props<{id: string, panel: any}>()
);
export const persistUiState = createAction(
  '[Dig] Persist Ui State'
);
export const persistUiStateSuccess = createAction(
  '[Dig] Persist Ui State Success'
);



