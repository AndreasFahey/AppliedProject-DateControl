import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFrozenPageRoutingModule } from './update-frozen-routing.module';

import { UpdateFrozenPage } from './update-frozen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateFrozenPageRoutingModule
  ],
  declarations: [UpdateFrozenPage]
})
export class UpdateFrozenPageModule {}
