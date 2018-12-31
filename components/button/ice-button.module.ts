import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceButtonComponent } from './ice-button.component';

@NgModule({
  declarations: [IceButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [IceButtonComponent]
})
export class IceButtonModule { }
