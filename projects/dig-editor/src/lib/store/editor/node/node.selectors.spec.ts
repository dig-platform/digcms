import * as fromNode from './node.reducer';
import { selectNodeState } from './node.selectors';

describe('Node Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNodeState({
      [fromNode.nodeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
