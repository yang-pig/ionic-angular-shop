import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';


import {Http,Jsonp} from "@angular/http";

import { ConfigProvider } from '../../providers/config/config';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

    //装饰器    this.content.scrollToTop();回到顶部

    @ViewChild(Content) content: Content;

  public flag=false;  /*有没有关键词、关键词开关*/

  public keywords='';  /*关键词*/

  public list=[];  /*模拟商品数据*/

  public page=1; /*分页*/

  public hasData=true;  /*是否有数据*/

  constructor(public navCtrl: NavController, public navParams: NavParams,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServiceProvider) {

         for(let i=0;i<10;i++){
      
            this.list.push({
                pic:'assets/imgs/0'+i+'.jpg',
                title:'第'+i+'条'
            })
          }    
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getSearchList(infiniteScroll){

  

     if(!infiniteScroll){  /*点击搜索按钮*/
        this.page=1;
        this.hasData=true; 
        this.content.scrollToTop(0); /*回到顶部*/
     }

      console.log(this.keywords);

      var api='api/plist?search='+this.keywords+'&page='+this.page;
      this.httpService.requestData(api,(data)=>{
            console.log(data);

          if(this.page==1){  /*第一页 替换数据*/
            this.list=data.result;
           
          }else{
            this.list=this.list.concat(data.result);  /*拼接数据*/
          }          
          this.flag=true;  /*显示商品列表*/
          if(infiniteScroll){
            //告诉ionic 请求数据完成
            infiniteScroll.complete();    
             /*没有数据停止上拉更新*/          
             if(data.result<10){
              this.hasData=false; 
           }
          }
          this.page++;
       
      })      


  } 

    //加载更多
    doLoadMore(infiniteScroll){
      
      this.getSearchList(infiniteScroll)
  
    }
}
