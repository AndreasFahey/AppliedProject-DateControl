import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCcPageRoutingModule } from './update-cc-routing.module';

import { UpdateCcPage } from './update-cc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCcPageRoutingModule
  ],
  declarations: [UpdateCcPage]
})
export class UpdateCcPageModule {}
