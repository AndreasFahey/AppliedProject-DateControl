import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MineralsPageRoutingModule } from './minerals-routing.module';

import { MineralsPage } from './minerals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MineralsPageRoutingModule
  ],
  declarations: [MineralsPage]
})
export class MineralsPageModule {}
