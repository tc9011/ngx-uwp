import { ModuleWithProviders, NgModule } from '@angular/core';

import { UWPInputModule } from './input';
import { UWPButtonModule } from './button';
import { UWPAlertModule } from './alert';
import { UwpIconModule } from './icon';

@NgModule({
  exports: [
    UWPInputModule,
    UWPButtonModule,
    UWPAlertModule,
    UwpIconModule
  ]
})
export class NgxUWPModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUWPModule
    };
  }
}
