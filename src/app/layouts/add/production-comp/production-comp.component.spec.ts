import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCompComponent } from './production-comp.component';

describe('ProductionCompComponent', () => {
  let component: ProductionCompComponent;
  let fixture: ComponentFixture<ProductionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
