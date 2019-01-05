import { ModuleWithProviders, NgModule } from '@angular/core';

import { UWPInputModule } from './input';
import { UWPButtonModule } from './button';
import { UWPAlertModule } from './alert';

@NgModule({
  exports: [
    UWPInputModule,
    UWPButtonModule,
    UWPAlertModule
  ]
})
export class NgxUWPModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUWPModule
    };
  }
}
