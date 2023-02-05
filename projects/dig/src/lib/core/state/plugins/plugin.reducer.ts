import { Action, createReducer, on } from '@ngrx/store';
import * as PluginActions from './plugin.actions';
import {Plugin, PluginMap} from '../../interfaces/plugin';

export const pluginFeatureKey = 'plugin';

export interface State {
  plugins: Plugin[]
}

export const initialState: State = {
  plugins: []
};

export const reducer = createReducer(
  initialState,

  on(PluginActions.loadPluginsSuccess, (state, {plugins}) => ({...state, plugins: [...plugins]})),

);
