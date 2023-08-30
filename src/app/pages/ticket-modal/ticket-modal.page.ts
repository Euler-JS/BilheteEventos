import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.page.html',
  styleUrls: ['./ticket-modal.page.scss'],
})
export class TicketModalPage implements OnInit {

  @Input() item: any;
  selectedTickets: number[] = [];
  totalAmount: number = 0;

  @Input() selectedEvent: any; // Recebe o evento selecionado do componente pai
  phoneNumber: string = '';
  isValidPhoneNumber: boolean = false;

  constructor(private modalController: ModalController,
    private p: PaymentsService) { }

  ngOnInit() {
  }

  updateTotal() {
    this.totalAmount = this.selectedTickets.reduce(
      (total, quantity, index) =>
        total + quantity * Number(this.item.ticketTypes[index].value),
      0
    );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  validatePhoneNumber() {
    // Verifica se o número de celular começa com "84" ou "85"
    this.isValidPhoneNumber = /^84|^85/.test(this.phoneNumber);
  }
  makePayment() {
    // Use this.phoneNumber para o número de celular ao efetuar o pagamento via Mpesa
    // Implemente a lógica de pagamento aqui
    // Feche o modal após o pagamento
    this.p.doPayment();
    // this.modalController.dismiss();
  }

}
