import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMeatsPage } from './update-meats.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMeatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMeatsPageRoutingModule {}
