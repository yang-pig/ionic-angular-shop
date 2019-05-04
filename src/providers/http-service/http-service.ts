// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http,Jsonp} from "@angular/http";
import { ConfigProvider } from '../config/config';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public jsonp:Jsonp,public config:ConfigProvider) {
    console.log('Hello HttpServiceProvider Provider');
  }

  requestData(apiUrl, callback) {
    var api = '';
    if(apiUrl.indexOf('?')==-1){
      api =this.config.apiUrl+apiUrl+'?callback=JSONP_CALLBACK'
    }else{
      api=this.config.apiUrl+apiUrl+'&callback=JSONP_CALLBACK'
    }

    this.jsonp.get(api).subscribe(function(data){
      // console.log(data);

      callback(data['_body']);        /*回调函数*/

    },function(err){
       console.log(err);
    })

  }

}
