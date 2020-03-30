import { TestBed } from '@angular/core/testing';

import { BiscuitsCakesService } from './biscuits-cakes.service';

describe('BiscuitsCakesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiscuitsCakesService = TestBed.get(BiscuitsCakesService);
    expect(service).toBeTruthy();
  });
});
