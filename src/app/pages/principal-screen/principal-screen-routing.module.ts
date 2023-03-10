import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalScreenPage } from './principal-screen.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalScreenPage,
    children:[
      {
        path:'home',
        loadChildren: ()=> import('../home/home.module').then(m=>m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalScreenPageRoutingModule {}
