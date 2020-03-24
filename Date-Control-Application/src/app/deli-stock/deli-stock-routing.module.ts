import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliStockPage } from './deli-stock.page';

const routes: Routes = [
  {
    path: '',
    component: DeliStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliStockPageRoutingModule {}
