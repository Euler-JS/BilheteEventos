import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { timeout } from 'rxjs/operators';
import { TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient,
    private modalController: ModalController) { }

  // doPayment(number, amount) {
  //   let info = {
  //     "numero":number,
  //     "valor":amount,
  //     "uui_company":environment.privateKeyMpesa
  //   }

  //   this.http.post(environment.mpesaPaymentUrl+'/pagar/',
  //     info,
  //   ).subscribe(res=>{
  //     alert(res);
  //     this.modalController.dismiss();
  //   })
  // }

  doPayment(number, amount) {
    let info = {
      "numero": number,
      "valor": amount,
      "uui_company": environment.privateKeyMpesa
    };
  
    // Defina o tempo limite em milissegundos (por exemplo, 10 segundos).
    const timeoutMilliseconds = 100000;
  
    this.http
      .post(environment.mpesaPaymentUrl + '/pagar/', info)
      .pipe(
        // Use o operador timeout para definir o limite de tempo.
        timeout(timeoutMilliseconds)
      )
      .subscribe(
        (res) => {
          alert(res);
          this.modalController.dismiss();
        },
        (error) => {
          // Trate o erro de tempo limite aqui.
          if (error instanceof TimeoutError) {
            console.error('A requisição atingiu o tempo limite.');
            alert('A requisição atingiu o tempo limite.');
            // Faça algo aqui, como exibir uma mensagem de erro ao usuário.
          } else {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição:')
            // Trate outros erros da requisição aqui.
          }
        }
      );
  }
  
}
