import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceButtonComponent } from './ice-button.component';

describe('IceButtonComponent', () => {
  let component: IceButtonComponent;
  let fixture: ComponentFixture<IceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
