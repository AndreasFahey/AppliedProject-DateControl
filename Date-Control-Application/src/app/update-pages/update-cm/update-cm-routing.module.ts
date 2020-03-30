import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCmPage } from './update-cm.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCmPageRoutingModule {}
