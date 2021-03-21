import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamesListPageModule } from '../pages/games-list/games-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { GamePageModule } from '../pages/games-list/game/game.module';
import { GameNewPageModule } from '../pages/games-list/game-new/game-new.module';
import { GameProvider } from '../providers/game/game';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PhotosPageModule } from '../pages/photos/photos.module';

const firebase = {
  apiKey: "AIzaSyCbg6Fac3Toz8I7nvFmddT8l4xCyACF-xs",
  authDomain: "games-b5f72.firebaseapp.com",
  projectId: "games-b5f72",
  storageBucket: "games-b5f72.appspot.com",
  messagingSenderId: "884448464074",
  appId: "1:884448464074:web:78ba1dec8d2e2eb075f833"
};

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GamesListPageModule,
    AboutPageModule,
    TabPageModule,
    GamePageModule,
    GameNewPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameProvider,
    Camera
  ]
})
export class AppModule {}
