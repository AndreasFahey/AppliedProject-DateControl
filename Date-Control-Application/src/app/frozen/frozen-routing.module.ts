import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrozenPage } from './frozen.page';

const routes: Routes = [
  {
    path: '',
    component: FrozenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrozenPageRoutingModule {}
