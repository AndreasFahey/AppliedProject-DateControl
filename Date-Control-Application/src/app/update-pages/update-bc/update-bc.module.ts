import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBcPageRoutingModule } from './update-bc-routing.module';

import { UpdateBcPage } from './update-bc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBcPageRoutingModule
  ],
  declarations: [UpdateBcPage]
})
export class UpdateBcPageModule {}
