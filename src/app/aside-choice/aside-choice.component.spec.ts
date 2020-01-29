import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideChoiceComponent } from './aside-choice.component';

describe('AsideChoiceComponent', () => {
  let component: AsideChoiceComponent;
  let fixture: ComponentFixture<AsideChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
