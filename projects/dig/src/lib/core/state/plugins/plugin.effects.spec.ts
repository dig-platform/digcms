import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PluginEffects } from './plugin.effects';

describe('PluginEffects', () => {
  let actions$: Observable<any>;
  let effects: PluginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PluginEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PluginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
