import { TestBed } from '@angular/core/testing';

import { ConfectioneryCrispsService } from './confectionery-crisps.service';

describe('ConfectioneryCrispsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfectioneryCrispsService = TestBed.get(ConfectioneryCrispsService);
    expect(service).toBeTruthy();
  });
});
