import { TestBed } from '@angular/core/testing';

import { FrozenService } from './frozen.service';

describe('FrozenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrozenService = TestBed.get(FrozenService);
    expect(service).toBeTruthy();
  });
});
