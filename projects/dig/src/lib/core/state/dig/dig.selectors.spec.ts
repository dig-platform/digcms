import * as fromDig from './dig.reducer';
import { selectDigState } from './dig.selectors';

describe('Dig Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDigState({
      [fromDig.digFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
