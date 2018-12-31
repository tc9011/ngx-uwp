import { ModuleWithProviders, NgModule } from '@angular/core'

import { IceInputModule } from './input'
import { IceButtonModule } from './button'

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
