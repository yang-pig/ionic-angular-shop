import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Http,Jsonp} from "@angular/http";
//商品列表

import { ProductlistPage } from '../productlist/productlist';

import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  public ProductlistPage=ProductlistPage;  /*商品列表页面*/

  public leftCate=[];  /*左侧分类数据*/

  public rightCate=[];  /*右侧分类数据*/

  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServiceProvider) {
      // //右侧的分类数据模拟
      //   for(let i=0;i<10;i++){
    
      //     this.recList.push({
      //         pic:'assets/imgs/0'+i+'.jpg',
      //         title:'第'+i+'条'
      //     })
      //   }

        

      // //左侧模拟数据
      //   for(let i=0;i<10;i++){
          
      //     this.cateList.push(`分类${i}`);
      //   }
      this.getLeftCateData();/*左侧分类*/
  }

    //左侧分类的方法

    getLeftCateData(){
      var api='api/pcate'
      this.httpService.requestData(api,(data)=>{
          console.log(data);
          this.leftCate=data.result;

          //调用右侧分类
          this.getRightCateData(this.leftCate[0]['_id']);        
      })
  }

  getRightCateData(pid){
    var api='api/pcate?pid='+pid;
    this.httpService.requestData(api,(data)=>{
      console.log(data);
      this.rightCate=data.result;
      
    })
}

}
