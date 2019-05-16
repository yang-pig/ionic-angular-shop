import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ConfigProvider } from '../../providers/config/config';
/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pcontent',
  templateUrl: 'pcontent.html',
})
export class PcontentPage {
  public tabs='plist';  /*商品列表选中*/
  public item=[];  /*商品列表*/
  constructor(public navCtrl: NavController, public navParams: NavParams,public config:ConfigProvider,public httpService:HttpServiceProvider) {
    this.requestData(this.navParams.data.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcontentPage');
  }
  requestData(id){
    //http://39.108.159.135/api/pcontent?id=59f6a2d27ac40b223cfdcf81
    var api='api/pcontent?id='+id
    this.httpService.requestData(api,(data)=>{
      console.log(data);

      this.item=data.result;
    })
  }
}
