import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingCompComponent } from './grinding-comp.component';

describe('GrindingCompComponent', () => {
  let component: GrindingCompComponent;
  let fixture: ComponentFixture<GrindingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
