import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

import { UWPIconModule } from 'ngx-uwp/icon';

import { UWPButtonComponent } from './uwp-button.component';

@NgModule({
  declarations: [UWPButtonComponent],
  imports: [CommonModule, ObserversModule, UWPIconModule],
  exports: [UWPButtonComponent]
})
export class UWPButtonModule { }
