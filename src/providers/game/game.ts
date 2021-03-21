import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class GameProvider {

  private games: any = [];
  gameSubject = new Subject<any[]>();

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllGames();
  }

  emitGamesSubject() {
    this.gameSubject.next(this.games.slice());
  }

  getGameById(id: string) {
    for (const game of this.games) {
      if(game.id == id) return game;
    }
  }

  saveNewGame(game: any) {
    return new Observable(obs => {
      this.db.collection('games').add(game).then(() => {
        console.log('success');
        obs.next();
      })
    })
  }

  getAllGames() {
    return this.db.collection('games').snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.games = res;
      this.emitGamesSubject();
    })
  }

  update(game: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`games/${id}`).update(game);
      obs.next();
    })
  }

  delete(id: any) {
    this.db.doc(`games/${id}`).delete();
  }
}
