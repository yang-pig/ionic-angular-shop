import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content,AlertController } from 'ionic-angular';


import {Http,Jsonp} from "@angular/http";

import { ConfigProvider } from '../../providers/config/config';

import { HttpServiceProvider } from '../../providers/http-service/http-service';

import { StorageProvider } from '../../providers/storage/storage';

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

  public historyList=[]; /*历史记录的数据*/

  constructor(public alertCtrl: AlertController,public storage:StorageProvider,public navCtrl: NavController, public navParams: NavParams,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServiceProvider) {

        //  for(let i=0;i<10;i++){
      
        //     this.list.push({
        //         pic:'assets/imgs/0'+i+'.jpg',
        //         title:'第'+i+'条'
        //     })
        //   }    
    //获取历史记录
    this.getHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getSearchList(infiniteScroll){

  

     if(!infiniteScroll){  /*点击搜索按钮*/
        this.page=1;
        this.hasData=true; 
        this.content.scrollToTop(0); /*回到顶部*/
        //调用保存历史记录的方法
        this.saveHistory();
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

  //点击历史记录执行的方法

  goSearch(keywords){

    // console.log(keywords);
    this.keywords=keywords;

    this.getSearchList('');



  }
  //保存历史记录

  saveHistory(){
    /*
      1.localStorage获取历史记录
    */ 

    var history=this.storage.get('historyData');

    //2.判断历史记录存在不存在
    if(history){ /*有*/
      // ['女装','手机','电脑','男装']
      if(history.indexOf(this.keywords)==-1){

        history.push(this.keywords);
        //重新写入
        this.storage.set('historyData',history);
      }



    }else{ /*以前没有*/

      this.historyList.push(this.keywords);
      // historyList： ['女装']

      //写入到localstorage

      this.storage.set('historyData',this.historyList);


    }

  }
  //获取历史记录

  getHistory(){

     var history=this.storage.get('historyData');
     if(history){  /*如果历史记录存在 把历史记录给数据*/
        this.historyList=history;
     }
  }
  //删除历史记录

  removeHistory(keywords){
    //提示
    let confirm = this.alertCtrl.create({
      title: '您确定要删除吗?',
      message: '您确定要删除这条历史记录吗，确定点击是，否则点击否。',
      buttons: [
        {
          text: '否',
          handler: () => {
           
          }
        },
        {
          text: '是',
          handler: () => {
           
              var index=this.historyList.indexOf(keywords);
              // console.log(index);

              this.historyList.splice(index,1);
              //写入到localstorage
              this.storage.set('historyData',this.historyList);
          }
        }
      ]
    });
    confirm.present();






  }
}
