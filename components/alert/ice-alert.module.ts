import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceAlertComponent } from './ice-alert.component';

@NgModule({
  declarations: [IceAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [IceAlertComponent]
})
export class IceAlertModule { }
