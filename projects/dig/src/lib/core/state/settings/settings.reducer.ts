import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import {Settings} from '../../interfaces/settings';

export const settingsFeatureKey = 'settings';

export interface State {
  loaded: boolean;
  settings: Settings | undefined
}

export const initialState: State = {
  loaded: false,
  settings: undefined
};

export const reducer = createReducer(
  initialState,
  on(SettingsActions.loadSettings, state => ({...state, loaded: false})),
  on(SettingsActions.loadSettingsSuccess, (state, {settings}) => ({...state, settings, loaded: true})),
  on(SettingsActions.patchSettings, (state, {settings}) => ({...state, settings: {...state.settings, ...settings}})),
);
