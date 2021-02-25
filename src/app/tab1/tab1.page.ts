import { Component } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter {
  constructor(private navCtrl: NavController) {}

  navigateToSubpage() {
    this.navCtrl.navigateForward('test');
  }

  ionViewWillEnter() {
    console.warn(`viewWillEnter`);
  }
}
