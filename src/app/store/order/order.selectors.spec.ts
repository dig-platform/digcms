import * as fromOrder from './order.reducer';
import { selectOrderState } from './order.selectors';

describe('Order Selectors', () => {
  it('should select the feature state', () => {
    const result = selectOrderState({
      [fromOrder.orderFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
