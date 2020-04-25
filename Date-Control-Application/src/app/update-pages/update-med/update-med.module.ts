import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMedPageRoutingModule } from './update-med-routing.module';

import { UpdateMedPage } from './update-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateMedPageRoutingModule
  ],
  declarations: [UpdateMedPage]
})
export class UpdateMedPageModule {}
