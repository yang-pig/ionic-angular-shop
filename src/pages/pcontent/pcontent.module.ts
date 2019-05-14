import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PcontentPage } from './pcontent';

@NgModule({
  declarations: [
    PcontentPage,
  ],
  imports: [
    IonicPageModule.forChild(PcontentPage),
  ],
})
export class PcontentPageModule {}
