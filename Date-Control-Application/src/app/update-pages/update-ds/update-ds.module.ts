import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDsPageRoutingModule } from './update-ds-routing.module';

import { UpdateDsPage } from './update-ds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDsPageRoutingModule
  ],
  declarations: [UpdateDsPage]
})
export class UpdateDsPageModule {}
