import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  selector: 'ngs-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  quantity: number;  // we'll use it later for the shopping cart

  addItems() {
    console.log(`Quantity: ${this.quantity}`);
    this.quantity = null; // Reset selected number of items.
  }

  ngOnInit() {
  }

}
