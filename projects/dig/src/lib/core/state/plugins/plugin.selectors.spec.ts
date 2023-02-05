import * as fromPlugin from './plugin.reducer';
import { selectPluginState } from './plugin.selectors';

describe('Plugin Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPluginState({
      [fromPlugin.pluginFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
