import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UWPIconComponent } from './uwp-icon.component';

@NgModule({
  declarations: [UWPIconComponent],
  exports: [
    UWPIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UWPIconModule { }
