import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { NgxUWPModule } from 'ngx-uwp'

const sharedModule = [
  HttpClientModule,
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NgxUWPModule
]

@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: [sharedModule]
})
export class SharedModule {
}
