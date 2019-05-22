import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InstructionsPage } from "../instructions/instructions";
import { HintPage } from "../hint/hint";
import { AlertController } from "ionic-angular";
import { Storage  } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  score: number;
  finishedPages: number[];
  constructor(private alertCtrl: AlertController, private storage: Storage, public navCtrl: NavController) {
      this.getScore();
  }
  ionViewWillEnter()
  {
    this.getScore();
  }
  getScore()
  {
      this.storage.get('finished').then(
        (finished) => {
          if (finished == null)
          {
            this.finishedPages = [];
          }
          else
          {
            this.finishedPages = finished;
          }
          this.score = this.finishedPages.length;
          return this.finishedPages.slice();
        }
      ).catch((error)=> {
          console.log(error);
        }

      );
      return 0;
  }
  reset()
  {
    const alert = this.alertCtrl.create({
      title: 'Score Reset',
      subTitle: 'Are you sure you want to reset your score?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //if (click == true) {
              this.storage.set('finished', [])
              this.score = 0;
            //}
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('closed');
          }
        }
      ]
    });
    alert.present();
    //this.storage.set('finished', [])
    //this.score = 0
  }
  begin()
  {
    this.navCtrl.push(HintPage);
  }
  loadInstructions()
  {
    this.navCtrl.push(InstructionsPage);
  }
}
