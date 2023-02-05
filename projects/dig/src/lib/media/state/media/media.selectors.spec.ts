import * as fromMedia from './media.reducer';
import { selectMediaState } from './media.selectors';

describe('Media Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMediaState({
      [fromMedia.mediaFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
