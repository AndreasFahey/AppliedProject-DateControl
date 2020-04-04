import { TestBed } from '@angular/core/testing';

import { CerealMuesliService } from './cereal-muesli.service';

describe('CerealMuesliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CerealMuesliService = TestBed.get(CerealMuesliService);
    expect(service).toBeTruthy();
  });
});
