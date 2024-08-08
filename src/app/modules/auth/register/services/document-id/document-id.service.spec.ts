import { TestBed } from '@angular/core/testing';

import { DocumentIdService } from './document-id.service';

describe('DocumentIdService', () => {
  let service: DocumentIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
