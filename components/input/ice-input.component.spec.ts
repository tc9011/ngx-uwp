import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceInputComponent } from './ice-input.component';

describe('IceInputComponent', () => {
  let component: IceInputComponent;
  let fixture: ComponentFixture<IceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
