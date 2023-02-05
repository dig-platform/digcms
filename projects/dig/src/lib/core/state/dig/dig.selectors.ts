import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDig from './dig.reducer';

export const selectDigState = createFeatureSelector<fromDig.State>(
  fromDig.digFeatureKey
);

// this is persistant data
export const selectUiState = createSelector(
  selectDigState,
  state => ({
    panels: {...state.panels}
  })
)


export const selectPanelState = createSelector(
  selectDigState,
  state => ({...state.panels})
)
