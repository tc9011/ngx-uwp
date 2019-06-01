import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

import { UwpIconModule } from 'ngx-uwp/icon';

import { UwpButtonComponent } from './uwp-button.component';

@NgModule({
  declarations: [UwpButtonComponent],
  imports: [CommonModule, ObserversModule, UwpIconModule],
  exports: [UwpButtonComponent]
})
export class UwpButtonModule { }
