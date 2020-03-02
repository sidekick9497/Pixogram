import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoggedoutComponent } from './nav-loggedout.component';

describe('NavLoggedoutComponent', () => {
  let component: NavLoggedoutComponent;
  let fixture: ComponentFixture<NavLoggedoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoggedoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoggedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
