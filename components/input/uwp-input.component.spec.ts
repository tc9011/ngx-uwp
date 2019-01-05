import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UWPInputComponent } from './uwp-input.component';

describe('UWPInputComponent', () => {
  let component: UWPInputComponent;
  let fixture: ComponentFixture<UWPInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UWPInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UWPInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
