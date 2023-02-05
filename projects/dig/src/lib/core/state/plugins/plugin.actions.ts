import { createAction, props } from '@ngrx/store';
import {Plugin, PluginMap} from '../../interfaces/plugin';

export const loadPlugins = createAction(
  '[Plugin] Load Plugins'
);

export const loadPluginsSuccess = createAction(
  '[Plugin] Load Plugins Success',
  props<{ plugins: Plugin[] }>()
);

export const loadPluginsFailure = createAction(
  '[Plugin] Load Plugins Failure',
  props<{ error: any }>()
);
