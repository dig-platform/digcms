import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlugin from './plugin.reducer';

export const selectPluginState = createFeatureSelector<fromPlugin.State>(
  fromPlugin.pluginFeatureKey
);

export const selectPlugins = createSelector(
  selectPluginState,
  state => ([...state.plugins])
)
