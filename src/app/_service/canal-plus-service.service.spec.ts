import { TestBed } from '@angular/core/testing';

import { CanalPlusServiceService } from './canal-plus-service.service';

describe('CanalPlusServiceService', () => {
  let service: CanalPlusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanalPlusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
