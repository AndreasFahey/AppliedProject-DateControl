import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCcPageRoutingModule } from './update-cc-routing.module';

import { UpdateCcPage } from './update-cc.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateCcPageRoutingModule
  ],
  declarations: [UpdateCcPage]
})
export class UpdateCcPageModule {}
