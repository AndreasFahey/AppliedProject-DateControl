import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMiscPage } from './update-misc.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMiscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMiscPageRoutingModule {}
