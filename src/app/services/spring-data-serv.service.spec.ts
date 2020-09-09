import { TestBed } from '@angular/core/testing';

import { SpringDataServService } from './spring-data-serv.service';

describe('SpringDataServService', () => {
  let service: SpringDataServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringDataServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
