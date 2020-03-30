import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMineralsPageRoutingModule } from './update-minerals-routing.module';

import { UpdateMineralsPage } from './update-minerals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMineralsPageRoutingModule
  ],
  declarations: [UpdateMineralsPage]
})
export class UpdateMineralsPageModule {}
