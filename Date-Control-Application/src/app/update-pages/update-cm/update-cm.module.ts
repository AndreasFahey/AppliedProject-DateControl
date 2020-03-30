import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCmPageRoutingModule } from './update-cm-routing.module';

import { UpdateCmPage } from './update-cm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCmPageRoutingModule
  ],
  declarations: [UpdateCmPage]
})
export class UpdateCmPageModule {}
