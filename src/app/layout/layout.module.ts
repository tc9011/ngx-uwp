import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'

import { FooterComponent } from './footer/footer.component'
import { GlobalComponent } from './global/global.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'

const LAYOUTCOMPONENT = [FooterComponent, GlobalComponent, SidebarComponent, NavbarComponent]

@NgModule({
  imports: [SharedModule],
  declarations: [...LAYOUTCOMPONENT],
  exports: [...LAYOUTCOMPONENT]
})
export class LayoutModule {}
