import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//搜索页面
import { SearchPage } from '../search/search';
import {Http,Jsonp} from "@angular/http";

import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public recList=[];

  public hotList=[];  /*热门商品*/

  public recListWidth='';

  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,) {

    console.log(config.apiUrl);
    config.run();
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

}
