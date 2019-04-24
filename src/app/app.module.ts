import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CartPage } from '../pages/cart/cart';
import { CategoryPage } from '../pages/category/category';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
//注册
import { RegisterPage } from '../pages/register/register';
import { RegistersignPage } from '../pages/registersign/registersign';
import { RegisterpasswordPage } from '../pages/registerpassword/registerpassword';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoryPage,
    HomePage,
    UserPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    RegisterpasswordPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    CartPage,
    HomePage,
    UserPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    RegisterpasswordPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
