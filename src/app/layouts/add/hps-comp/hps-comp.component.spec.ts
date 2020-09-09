import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpsCompComponent } from './hps-comp.component';

describe('HpsCompComponent', () => {
  let component: HpsCompComponent;
  let fixture: ComponentFixture<HpsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
