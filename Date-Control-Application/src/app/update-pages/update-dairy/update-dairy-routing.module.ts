import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDairyPage } from './update-dairy.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDairyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDairyPageRoutingModule {}
