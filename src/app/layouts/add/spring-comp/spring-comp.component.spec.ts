import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCompComponent } from './spring-comp.component';

describe('SpringCompComponent', () => {
  let component: SpringCompComponent;
  let fixture: ComponentFixture<SpringCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
