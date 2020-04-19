import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfectioneryCrispsPageRoutingModule } from './confectionery-crisps-routing.module';

import { ConfectioneryCrispsPage } from './confectionery-crisps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfectioneryCrispsPageRoutingModule
  ],
  declarations: [ConfectioneryCrispsPage]
})
export class ConfectioneryCrispsPageModule {}
