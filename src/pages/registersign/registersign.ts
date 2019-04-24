import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterpasswordPage } from '../registerpassword/registerpassword';
/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registersign',
  templateUrl: 'registersign.html',
})
export class RegistersignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistersignPage');
  }
  goRegisterpasswordPage(){
    this.navCtrl.push(RegisterpasswordPage);

  }
}
