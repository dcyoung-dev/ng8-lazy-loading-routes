import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewLazyPageComponent} from './new-lazy-page.component';

describe('NewLazyPageComponent', () => {
  let component: NewLazyPageComponent;
  let fixture: ComponentFixture<NewLazyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewLazyPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLazyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
