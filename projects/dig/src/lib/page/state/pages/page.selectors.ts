import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPage from './page.reducer';

export const selectPageState = createFeatureSelector<fromPage.State>(
  fromPage.pageFeatureKey
);

export const selectActivePage = createSelector(
  selectPageState,
  state => state.activePage ? {...state.activePage} : undefined
)

export const selectPageSaveEnabled = createSelector(
  selectPageState,
  state => !! state.dirty
)

export const selectRecentPages = createSelector(
  selectPageState,
  state => {
    if (! state.loaded || ! state.pages) {
      return null;
    }
    return [...state.pages].sort((a, b) => {
      const timestampA = a.metadata.updatedAt ? a.metadata.updatedAt.seconds : a.metadata.createdAt.seconds;
      const timestampB = b.metadata.updatedAt ? b.metadata.updatedAt.seconds : b.metadata.createdAt.seconds;
      return timestampA - timestampB;
    }).slice(0, 10);
  }
)
