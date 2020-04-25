import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeatsPageRoutingModule } from './meats-routing.module';

import { MeatsPage } from './meats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MeatsPageRoutingModule
  ],
  declarations: [MeatsPage]
})
export class MeatsPageModule {}
