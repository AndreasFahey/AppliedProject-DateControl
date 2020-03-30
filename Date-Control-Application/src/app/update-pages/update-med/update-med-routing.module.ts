import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMedPage } from './update-med.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMedPageRoutingModule {}
