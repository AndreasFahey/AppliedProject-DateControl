import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDairyPageRoutingModule } from './update-dairy-routing.module';

import { UpdateDairyPage } from './update-dairy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDairyPageRoutingModule
  ],
  declarations: [UpdateDairyPage]
})
export class UpdateDairyPageModule {}
