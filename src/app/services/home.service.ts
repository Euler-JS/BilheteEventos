import { Injectable } from '@angular/core';

export interface Vendas{
  name: string;
  pts: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

}
