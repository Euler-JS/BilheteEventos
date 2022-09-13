import { Component } from '@angular/core';
import { collection, setDoc } from '@angular/fire/firestore';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private dados: HomeService
    ) {
    this.dados.lerDados().subscribe((res) =>{
      console.log('Dados no FRS',res);
    })
  }


  async addDoar(){
    const dado = await this.dados.addDados({
      name: "Sozinho",
      curso: "Info"
    });

  }

}
