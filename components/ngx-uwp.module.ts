import { ModuleWithProviders, NgModule } from '@angular/core';

import { UwpButtonModule } from 'ngx-uwp/button';
import { UwpIconModule } from 'ngx-uwp/icon';
import { UwpThemeModule } from 'ngx-uwp/core';
import { UwpTooltipModule } from 'ngx-uwp/tooltip';

export * from 'ngx-uwp/button';
export * from 'ngx-uwp/icon';
export * from 'ngx-uwp/core';
export * from 'ngx-uwp/tooltip';

@NgModule({
  exports: [
    UwpButtonModule,
    UwpIconModule,
    UwpThemeModule,
    UwpTooltipModule,
  ]
})
export class NgxUWPModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUWPModule
    };
  }
}
