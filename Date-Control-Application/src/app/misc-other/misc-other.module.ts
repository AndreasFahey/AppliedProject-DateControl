import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscOtherPageRoutingModule } from './misc-other-routing.module';

import { MiscOtherPage } from './misc-other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscOtherPageRoutingModule
  ],
  declarations: [MiscOtherPage]
})
export class MiscOtherPageModule {}
