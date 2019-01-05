import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UWPAlertComponent } from './uwp-alert.component';


describe('UWPAlertComponent', () => {
  let component: UWPAlertComponent;
  let fixture: ComponentFixture<UWPAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UWPAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UWPAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
