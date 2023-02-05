import * as fromSettings from './settings.reducer';
import { selectSettingstate } from './settings.selectors';

describe('Settings Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSettingstate({
      [fromSettings.settingsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
