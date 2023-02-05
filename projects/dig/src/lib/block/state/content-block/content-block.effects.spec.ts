import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContentBlockEffects } from './content-block.effects';

describe('ContentBlockEffects', () => {
  let actions$: Observable<any>;
  let effects: ContentBlockEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentBlockEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ContentBlockEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
