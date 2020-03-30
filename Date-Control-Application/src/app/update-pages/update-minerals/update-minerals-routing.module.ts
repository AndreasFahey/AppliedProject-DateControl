import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMineralsPage } from './update-minerals.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMineralsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMineralsPageRoutingModule {}
