import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recList=[];
  public recListWidth='';
  constructor(public navCtrl: NavController) {
    for(let i=0;i<10;i++){

      this.recList.push({
          pic:'assets/imgs/0'+i+'.jpg',
          title:'第'+i+'条'
      })
    }

    this.recListWidth=this.recList.length*92+'px';


  }

}
