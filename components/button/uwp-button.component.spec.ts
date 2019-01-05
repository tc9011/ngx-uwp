import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UWPButtonComponent } from './uwp-button.component';

describe('UWPButtonComponent', () => {
  let component: UWPButtonComponent;
  let fixture: ComponentFixture<UWPButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UWPButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UWPButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
