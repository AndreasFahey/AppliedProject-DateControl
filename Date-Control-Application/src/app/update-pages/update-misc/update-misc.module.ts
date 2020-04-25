import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMiscPageRoutingModule } from './update-misc-routing.module';

import { UpdateMiscPage } from './update-misc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateMiscPageRoutingModule
  ],
  declarations: [UpdateMiscPage]
})
export class UpdateMiscPageModule {}
