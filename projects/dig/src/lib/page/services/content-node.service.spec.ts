import { TestBed } from '@angular/core/testing';

import { ContentNodeService } from './content-node.service';

describe('ContentNodeService', () => {
  let service: ContentNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
