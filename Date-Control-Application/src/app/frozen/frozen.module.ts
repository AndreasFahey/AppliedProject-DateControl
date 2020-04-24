import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrozenPageRoutingModule } from './frozen-routing.module';

import { FrozenPage } from './frozen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FrozenPageRoutingModule
  ],
  declarations: [FrozenPage]
})
export class FrozenPageModule {}
