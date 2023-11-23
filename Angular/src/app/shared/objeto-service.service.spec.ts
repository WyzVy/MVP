import { TestBed } from '@angular/core/testing';

import { ObjetoServiceService } from './objeto-service.service';

describe('ObjetoServiceService', () => {
  let service: ObjetoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
