import { TestBed } from '@angular/core/testing';

import { MineralsService } from './minerals.service';

describe('MineralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MineralsService = TestBed.get(MineralsService);
    expect(service).toBeTruthy();
  });
});
