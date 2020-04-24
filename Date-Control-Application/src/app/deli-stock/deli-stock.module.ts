import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliStockPageRoutingModule } from './deli-stock-routing.module';

import { DeliStockPage } from './deli-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DeliStockPageRoutingModule
  ],
  declarations: [DeliStockPage]
})
export class DeliStockPageModule {}
