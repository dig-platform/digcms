import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NodeEffects } from './node.effects';

describe('NodeEffects', () => {
  let actions$: Observable<any>;
  let effects: NodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
