import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerealMuesliPageRoutingModule } from './cereal-muesli-routing.module';

import { CerealMuesliPage } from './cereal-muesli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CerealMuesliPageRoutingModule
  ],
  declarations: [CerealMuesliPage]
})
export class CerealMuesliPageModule {}
