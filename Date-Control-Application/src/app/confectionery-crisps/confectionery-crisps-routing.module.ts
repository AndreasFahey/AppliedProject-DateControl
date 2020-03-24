import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfectioneryCrispsPage } from './confectionery-crisps.page';

const routes: Routes = [
  {
    path: '',
    component: ConfectioneryCrispsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfectioneryCrispsPageRoutingModule {}
