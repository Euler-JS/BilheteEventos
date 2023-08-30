import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReadDataService {

  private apiRoute = '/posts';
  constructor(private http: HttpClient) { }

  getItems() {
    const apiUrl = environment.apiUrl; // Use a propriedade apiUrl do objeto environment
    // Use a URL da API para fazer as chamadas HTTP
  }

  obterEventos(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl+""+this.apiRoute);
  }
}
