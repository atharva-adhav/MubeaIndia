import { TestBed } from '@angular/core/testing';

import { HpsServService } from './hps-serv.service';

describe('HpsServService', () => {
  let service: HpsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
