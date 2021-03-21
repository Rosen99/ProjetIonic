import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-game-new',
  templateUrl: 'game-new.html',
})
export class GameNewPage {

public game: any = {
  title: null,
  plateforme: null,
  available: false,
  pictureLink: null,
  designer: null,
  releaseDate: null,
  summary: null,
  language: null,
  price: null
};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Game: GameProvider
    ) {}

  onAdd() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = {
        title: null,
        plateforme: null,
        available: false,
        pictureLink: null,
        designer: null,
        releaseDate: null,
        summary: null,
        language: null,
        price: null
      };
      this.navCtrl.pop();
    })
  }

}
