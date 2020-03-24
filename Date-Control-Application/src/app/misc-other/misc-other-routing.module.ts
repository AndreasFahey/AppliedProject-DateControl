import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscOtherPage } from './misc-other.page';

const routes: Routes = [
  {
    path: '',
    component: MiscOtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscOtherPageRoutingModule {}
