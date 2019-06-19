import { OverlayModule } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { UwpTooltipComponent } from './uwp-tooltip.component'
import { UwpTooltipDirective } from './uwp-tooltip.directive'

@NgModule({
  declarations: [UwpTooltipComponent, UwpTooltipDirective],
  imports: [CommonModule, OverlayModule],
  exports: [UwpTooltipComponent, UwpTooltipDirective],
  entryComponents: [UwpTooltipComponent]
})
export class UwpTooltipModule {}
