import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//搜索页面
import { SearchPage } from '../search/search';
import {Http,Jsonp} from "@angular/http";

import { ConfigProvider } from '../../providers/config/config';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public focusList=[];  /*数组*/
  
  public recList=[];

  public bestList=[];   /*精品推荐*/

  public bestListWidth=''; /*精品推荐数据长度*/

  public hotList=[];  /*热门商品*/

  public recListWidth='';

  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServiceProvider) {

    // console.log(config.apiUrl);
    // config.run();


    //调用轮播图

    this.getFocus();

    //调用精品推荐
    this.getBestProduct();

    //调用猜你喜欢

    this.getHotProduct();



    for(let i=0;i<10;i++){

      this.recList.push({
          pic:'assets/imgs/0'+i+'.jpg',
          title:'第'+i+'条'
      })
    }
    this.recListWidth=this.recList.length*92+'px';    
  }
  //定义一个跳转到搜索页面的方法
  goSearch(){

    this.navCtrl.push(SearchPage);
  }
  //轮播图
  getFocus(){ 
    var that=this;
    
    this.httpService.requestData('api/focus',function(data){
       console.log(data);
        that.focusList=data.result;
    })


  }
   //精品推荐


getBestProduct(){


   this.httpService.requestData('api/plist?is_best=1',(data)=>{
     console.log(data);
       this.bestList=data.result;
       this.bestListWidth=this.bestList.length*60+'px'; 
   })
}


 //猜你喜欢

 getHotProduct(){
  

  this.httpService.requestData('api/plist?is_hot=1',(data)=>{
    // console.log(data);
      this.hotList=data.result;            
    
  })

}


}
