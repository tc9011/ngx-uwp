import { NgModule } from '@angular/core'

import { LayoutModule } from '../layout/layout.module'
import { SharedModule } from '../shared/shared.module'

import { AboutComponent } from './about/about.component'
import { ViewsRoutingModule } from './views-routing.module'

@NgModule({
  imports: [ViewsRoutingModule, SharedModule, LayoutModule],
  declarations: [AboutComponent]
})
export class ViewsModule {}
