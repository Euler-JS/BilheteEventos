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
    ) {
  }
}
