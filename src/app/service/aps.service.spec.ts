import { TestBed } from '@angular/core/testing';

import { ApsService } from './aps.service';

describe('ApsService', () => {
  let service: ApsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
