import { TestBed } from '@angular/core/testing';

import { DeliService } from './deli.service';

describe('DeliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliService = TestBed.get(DeliService);
    expect(service).toBeTruthy();
  });
});
