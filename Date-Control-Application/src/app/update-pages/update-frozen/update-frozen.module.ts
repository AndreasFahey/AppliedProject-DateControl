import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFrozenPageRoutingModule } from './update-frozen-routing.module';

import { UpdateFrozenPage } from './update-frozen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFrozenPageRoutingModule
  ],
  declarations: [UpdateFrozenPage]
})
export class UpdateFrozenPageModule {}
