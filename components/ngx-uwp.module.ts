import { ModuleWithProviders, NgModule } from '@angular/core';

import { UWPInputModule } from 'ngx-uwp/input';
import { UWPButtonModule } from 'ngx-uwp/button';
import { UWPAlertModule } from 'ngx-uwp/alert';
import { UwpIconModule } from 'ngx-uwp/icon';

export * from 'ngx-uwp/input';
export * from 'ngx-uwp/button';
export * from 'ngx-uwp/alert';
export * from 'ngx-uwp/icon';
export * from 'ngx-uwp/core';

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
