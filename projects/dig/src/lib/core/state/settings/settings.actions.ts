import { createAction, props } from '@ngrx/store';
import {Settings} from '../../interfaces/settings';

export const loadSettings = createAction(
  '[Settings] Load Settings'
);

export const loadSettingsSuccess = createAction(
  '[Settings] Load Settings Success',
  props<{settings: Settings}>()
);

export const patchSettings = createAction(
  '[Settings] Patch Settings',
  props<{settings: Partial<Settings>}>()
)

export const saveSettings = createAction(
  '[Settings] Save Settings'
)

export const saveSettingsSuccess = createAction(
  '[Settings] Save Settings Success'
)

// todo handle success and failure




