import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'
import { SharedModule } from './shared/shared.module'
import { ViewsModule } from './views/views.module'

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
