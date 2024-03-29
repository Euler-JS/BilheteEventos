import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketModalPage } from './ticket-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TicketModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketModalPageRoutingModule {}
