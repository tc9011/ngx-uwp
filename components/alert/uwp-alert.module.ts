import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UWPAlertComponent } from './uwp-alert.component';

@NgModule({
  declarations: [UWPAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [UWPAlertComponent]
})
export class UWPAlertModule { }
