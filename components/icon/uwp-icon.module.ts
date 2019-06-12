import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UwpIconComponent } from './uwp-icon.component';

@NgModule({
  declarations: [UwpIconComponent],
  exports: [
    UwpIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UwpIconModule { }
