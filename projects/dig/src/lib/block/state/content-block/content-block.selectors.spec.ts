import * as fromContentBlock from './content-block.reducer';
import { selectContentBlockState } from './content-block.selectors';

describe('ContentBlock Selectors', () => {
  it('should select the feature state', () => {
    const result = selectContentBlockState({
      [fromContentBlock.contentBlockFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
