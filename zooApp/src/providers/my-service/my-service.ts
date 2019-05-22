import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Storage } from "@ionic/storage";
/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {
  private finished: number[];

  constructor(private http: HttpClient, private storage: Storage) {
    //console.log('Hello MyServiceProvider Provider');
    //this.storage.set('finished', []);
    //console.log("that worked")
  }

  saveFinished(array : number[])
  {

    this.finished = array.slice();
    this.storage.set('finished', array);
  }
  retrieveFinished()
  {
   // this.storage.get('finished').then((val) => {
     // console.log('Your age is', val);
    //});
    console.log("1");
    //this.storage

    this.storage.get('finished').then(
      (finished) => {
        console.log("2");
        this.finished = finished /*== null ? []: finished*/;
        return this.finished.slice();
      }
    );
    return [];
  }

}
