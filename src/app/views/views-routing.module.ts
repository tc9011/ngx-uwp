import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GlobalComponent } from '../layout/global/global.component'

import { AboutComponent } from './about/about.component'

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {}
