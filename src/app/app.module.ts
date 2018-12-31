import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxIcecreamModule } from 'ngx-icecream'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIcecreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
