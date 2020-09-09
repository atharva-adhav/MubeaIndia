import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoilingCompComponent } from './coiling-comp.component';

describe('CoilingCompComponent', () => {
  let component: CoilingCompComponent;
  let fixture: ComponentFixture<CoilingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoilingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoilingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
