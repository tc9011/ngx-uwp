import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceAlertComponent } from './ice-alert.component';

describe('IceAlertComponent', () => {
  let component: IceAlertComponent;
  let fixture: ComponentFixture<IceAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
