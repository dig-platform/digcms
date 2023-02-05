import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DigEffects } from './dig.effects';

describe('DigEffects', () => {
  let actions$: Observable<any>;
  let effects: DigEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DigEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DigEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
