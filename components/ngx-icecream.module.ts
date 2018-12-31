import { ModuleWithProviders, NgModule } from '@angular/core'

import { IceInputModule } from './input/ice-input.module'
import { IceButtonModule } from './button/ice-button.module'

export * from "./button"
export * from "./input"

@NgModule({
  exports: [
    IceInputModule,
    IceButtonModule
  ]
})
export class NgxIcecreamModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIcecreamModule
    };
  }
}
