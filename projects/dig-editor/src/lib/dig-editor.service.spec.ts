import { TestBed } from '@angular/core/testing';

import { DigEditorService } from './dig-editor.service';

describe('DigEditorService', () => {
  let service: DigEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
