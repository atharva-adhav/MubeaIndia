import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpccCompComponent } from './spcc-comp.component';

describe('SpccCompComponent', () => {
  let component: SpccCompComponent;
  let fixture: ComponentFixture<SpccCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpccCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpccCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
