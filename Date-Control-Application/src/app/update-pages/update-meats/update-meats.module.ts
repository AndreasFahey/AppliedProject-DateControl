import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMeatsPageRoutingModule } from './update-meats-routing.module';

import { UpdateMeatsPage } from './update-meats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateMeatsPageRoutingModule
  ],
  declarations: [UpdateMeatsPage]
})
export class UpdateMeatsPageModule {}
