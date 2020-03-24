import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerealMuesliPage } from './cereal-muesli.page';

const routes: Routes = [
  {
    path: '',
    component: CerealMuesliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerealMuesliPageRoutingModule {}
