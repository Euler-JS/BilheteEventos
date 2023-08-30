import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketModalPageRoutingModule } from './ticket-modal-routing.module';

import { TicketModalPage } from './ticket-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketModalPageRoutingModule
  ],
  declarations: [TicketModalPage]
})
export class TicketModalPageModule {}
