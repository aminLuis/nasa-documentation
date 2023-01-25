import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalScreenPageRoutingModule } from './principal-screen-routing.module';

import { PrincipalScreenPage } from './principal-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalScreenPageRoutingModule
  ],
  declarations: [PrincipalScreenPage]
})
export class PrincipalScreenPageModule {}
