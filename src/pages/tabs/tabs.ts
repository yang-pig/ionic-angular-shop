import { Component } from '@angular/core';

import { CartPage } from '../cart/cart';
import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = CategoryPage;
  tab4Root = UserPage;
  
  constructor() {

  }
}
