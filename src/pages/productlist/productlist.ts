import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';


/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {


  public list=[];  /*模拟商品数据*/

  public cid='';/*获取分类id*/

  public page=1; /*分页*/

  constructor(public navCtrl: NavController, public config:ConfigProvider,public navParams: NavParams,public httpService:HttpServiceProvider) {
        //获取传值
      // console.log(this.navParams.get('cid'));

      this.cid=this.navParams.get('cid');

      this.getProductList('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }

  getProductList(infiniteScroll){
    var api='api/plist?cid='+this.cid+'&page='+this.page;
    this.httpService.requestData(api,(data)=>{
      console.log(data);
      this.list=this.list.concat(data.result);  /*数据拼接*/
      if(infiniteScroll){
        //告诉ionic 请求数据完成
        infiniteScroll.complete();

        if(data.result.length<10){  /*没有数据停止上拉更新*/
          infiniteScroll.enable(false);
        }
      };

      this.page++;


    })

  }
  //加载更多
  doLoadMore(infiniteScroll){

    this.getProductList(infiniteScroll)

  }
}
