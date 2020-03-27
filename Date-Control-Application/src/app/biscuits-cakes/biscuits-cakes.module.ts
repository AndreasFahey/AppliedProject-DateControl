import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiscuitsCakesPageRoutingModule } from './biscuits-cakes-routing.module';

import { BiscuitsCakesPage } from './biscuits-cakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BiscuitsCakesPageRoutingModule
  ],
  declarations: [BiscuitsCakesPage]
})
export class BiscuitsCakesPageModule {}
