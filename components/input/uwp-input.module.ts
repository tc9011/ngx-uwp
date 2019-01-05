import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UWPInputComponent } from './uwp-input.component';

@NgModule({
  declarations: [UWPInputComponent],
  imports: [
    CommonModule
  ],
  exports: [UWPInputComponent]
})
export class UWPInputModule { }
