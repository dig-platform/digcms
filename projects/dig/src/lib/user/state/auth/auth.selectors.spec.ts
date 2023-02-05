import * as fromAuth from '/auth/store/auth.reducer';
import { selectAuthState } from '/auth/store/auth.selectors';

describe('Auth Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAuthState({
      [fromAuth.authFeatureKey]: {}
    });

    expect(result).toBeTruthy();
  });
});
