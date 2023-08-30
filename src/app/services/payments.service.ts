import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient,
    private modalController: ModalController) { }

  doPayment() {
    let info = {
      "numero":846151124,
      "valor":1,
      "uui_company":"000-102-004"
    }

    this.http.post(environment.mpesaPaymentUrl+'/pagar/',
      info
    ).subscribe(res=>{
      alert(res);
      this.modalController.dismiss();
    })
  }
}
