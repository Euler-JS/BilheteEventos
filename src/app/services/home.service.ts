import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, orderBy, query, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Vendas{
  name: string;
  pts: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: Firestore) { }

  lerDados(): Observable<Vendas[]>{

    const dadosRef = collection(this.firestore, 'eventos');
    console.log('doc', dadosRef);

    return collectionData(dadosRef, {idField: 'id'}) as Observable<Vendas[]>;
  }

  addDados(dados){
    const docRefAdd = collection(this.firestore, 'eventos');
    return setDoc(doc(docRefAdd), dados);
  }

}
