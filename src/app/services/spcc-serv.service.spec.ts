import { TestBed } from '@angular/core/testing';

import { SpccServService } from './spcc-serv.service';

describe('SpccServService', () => {
  let service: SpccServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpccServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
