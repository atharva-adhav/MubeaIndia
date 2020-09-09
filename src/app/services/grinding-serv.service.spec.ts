import { TestBed } from '@angular/core/testing';

import { GrindingServService } from './grinding-serv.service';

describe('GrindingServService', () => {
  let service: GrindingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrindingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
