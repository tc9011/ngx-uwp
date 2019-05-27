import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxUWPModule } from 'ngx-uwp';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    ViewsModule,
    CoreModule,
    SharedModule,
    NgxUWPModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
