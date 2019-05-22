import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { Content } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InstructionsPage } from '../pages/instructions/instructions';
import { HintPage } from '../pages/hint/hint';
import { MyServiceProvider } from '../providers/my-service/my-service';
import { AlertController } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { HTTP } from '@ionic-native/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InstructionsPage,
    HintPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InstructionsPage,
    HintPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    Geolocation,
    MyServiceProvider,
    Content,
    HTTP,
    AlertController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider
  ]
})
export class AppModule {}
