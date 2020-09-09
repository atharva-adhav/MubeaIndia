import { TestBed } from '@angular/core/testing';

import { ProductionNosServService } from './production-nos-serv.service';

describe('ProductionNosServService', () => {
  let service: ProductionNosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionNosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
