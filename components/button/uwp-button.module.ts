import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UWPButtonComponent } from './uwp-button.component';

@NgModule({
  declarations: [UWPButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [UWPButtonComponent]
})
export class UWPButtonModule { }
