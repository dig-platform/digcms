import * as fromContentNode from './content-node.reducer';
import { selectContentNodeState } from './content-node.selectors';

describe('ContentNode Selectors', () => {
  it('should select the feature state', () => {
    const result = selectContentNodeState({
      [fromContentNode.contentNodeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
