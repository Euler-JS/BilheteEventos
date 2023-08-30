import { Component } from '@angular/core';
import { ReadDataService } from '../services/read-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // eventosRegistrados=[
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento1.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento7.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento2.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento3.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento4.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento5.jpg"
  //   },
  //   {
  //     "titulo":"Julia Lucas & Hernani da Silva",
  //     "local": "Local: Maputo",
  //     "detalhes":"Um grande Show que os ... esperam",
  //     "imagem":"../../assets/img/evento6.jpg"
  //   }
  // ]
  eventosRegistrados: any[] = [];
  constructor(private dataService: ReadDataService) {}

  ngOnInit() {
    this.obterEventos();
  }

  obterEventos() {
    this.dataService.obterEventos().subscribe(
      (data) => {
        this.eventosRegistrados = data;
      },
      (error) => {
        console.error('Erro ao obter os eventos:', error);
      }
    );
  }

}
