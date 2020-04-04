import { TestBed } from '@angular/core/testing';

import { MeatsService } from './meats.service';

describe('MeatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeatsService = TestBed.get(MeatsService);
    expect(service).toBeTruthy();
  });
});
