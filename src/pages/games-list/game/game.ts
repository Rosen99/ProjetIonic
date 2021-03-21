import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements OnInit {
  modif: boolean = false;
  public title: string;
  public id: string;
  public game: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private Game: GameProvider,
    private Toast: ToastController
    ) {}

    ngOnInit() {
      this.title = this.navParams.get('title');
      this.id = this.navParams.get('id');
      this.game = this.Game.getGameById(this.id);
    }

  onGoAccessModif() {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir modifier ?',
      subTitle: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.modif = !this.modif
          }
        }
      ]
    });

    alert.present()
  }

  onModif() {
    this.Game.update(this.game, this.id).subscribe(() => {
      const toast = this.Toast.create({
        message: "Vos changements sont sauvegardés",
        duration: 2000
      }).present();

      this.modif = false;
    });
  }

  onDelete() {
    this.Game.delete(this.id);
    this.navCtrl.pop();
  }
}
