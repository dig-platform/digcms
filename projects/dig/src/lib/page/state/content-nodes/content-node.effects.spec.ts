import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContentNodeEffects } from './content-node.effects';

describe('ContentNodeEffects', () => {
  let actions$: Observable<any>;
  let effects: ContentNodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentNodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ContentNodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
