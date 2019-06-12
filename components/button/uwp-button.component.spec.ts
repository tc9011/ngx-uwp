import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UwpButtonComponent } from './uwp-button.component'

describe('UwpButtonComponent', () => {
  let component: UwpButtonComponent
  let fixture: ComponentFixture<UwpButtonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwpButtonComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UwpButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
