import { ModuleWithProviders, NgModule } from '@angular/core'

import { IceInputModule } from './input'
import { IceButtonModule } from './button'
import { IceAlertModule } from './alert'

@NgModule({
  exports: [
    IceInputModule,
    IceButtonModule,
    IceAlertModule
  ]
})
export class NgxIcecreamModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIcecreamModule
    };
  }
}
