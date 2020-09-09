import { TestBed } from '@angular/core/testing';

import { CoilingServService } from './coiling-serv.service';

describe('CoilingServService', () => {
  let service: CoilingServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoilingServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
