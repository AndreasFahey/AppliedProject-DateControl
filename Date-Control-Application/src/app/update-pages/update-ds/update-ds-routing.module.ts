import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDsPage } from './update-ds.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDsPageRoutingModule {}
