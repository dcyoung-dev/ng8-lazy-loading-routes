import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OldLazyPageComponent} from './old-lazy-page.component';

describe('OldLazyPageComponent', () => {
  let component: OldLazyPageComponent;
  let fixture: ComponentFixture<OldLazyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OldLazyPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldLazyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
