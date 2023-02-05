import { TestBed } from '@angular/core/testing';

import { DigCmsService } from './dig-cms.service';

describe('DigCmsService', () => {
  let service: DigCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
