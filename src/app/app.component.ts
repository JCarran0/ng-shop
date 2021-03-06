import { ProductService, ShoppingCartService } from './shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  get cartTotalQuantity(): number {
    // null removes attribute from the element, so the badge is not displayed.
    return this.shoppingCartService.totalQuantity || null;
  }
}
