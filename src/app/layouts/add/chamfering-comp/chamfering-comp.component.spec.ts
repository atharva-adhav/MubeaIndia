import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamferingCompComponent } from './chamfering-comp.component';

describe('ChamferingCompComponent', () => {
  let component: ChamferingCompComponent;
  let fixture: ComponentFixture<ChamferingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamferingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamferingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
