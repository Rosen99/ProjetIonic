import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  onAchat() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation achat',
      subTitle: 'Etes-vous sûr de vouloir acheter ce jeu ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Confirmer',
        }
      ]
    });
    alert.present()
  }
}
