import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCcPage } from './update-cc.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCcPageRoutingModule {}
