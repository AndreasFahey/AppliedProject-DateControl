import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiscuitsCakesPage } from './biscuits-cakes.page';

const routes: Routes = [
  {
    path: '',
    component: BiscuitsCakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiscuitsCakesPageRoutingModule {}
