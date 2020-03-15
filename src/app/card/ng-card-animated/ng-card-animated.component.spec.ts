import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardAnimatedComponent } from './ng-card-animated.component';

describe('NgCardAnimatedComponent', () => {
  let component: NgCardAnimatedComponent;
  let fixture: ComponentFixture<NgCardAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCardAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
