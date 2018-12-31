import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceInputComponent } from './ice-input.component';

@NgModule({
  declarations: [IceInputComponent],
  imports: [
    CommonModule
  ],
  exports: [IceInputComponent]
})
export class IceInputModule { }
