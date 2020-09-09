import { TestBed } from '@angular/core/testing';

import { ChamferingServService } from './chamfering-serv.service';

describe('ChamferingServService', () => {
  let service: ChamferingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamferingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
