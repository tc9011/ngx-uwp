import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../../shared/shared.module'

import { HomepageComponent } from './homepage.component'
import { homepageRoutes } from './homepage.routes'

@NgModule({
  imports: [SharedModule, RouterModule.forChild(homepageRoutes)],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule {}
