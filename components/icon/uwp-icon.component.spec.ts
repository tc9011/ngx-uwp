import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UwpIconComponent } from './uwp-icon.component'

describe('UwpIconComponent', () => {
  let component: UwpIconComponent
  let fixture: ComponentFixture<UwpIconComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UwpIconComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UwpIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
