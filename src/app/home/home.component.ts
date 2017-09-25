import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]>;

  readonly categories = [
    'all',
    'featured',
    'latest',
    'sport'
  ];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    console.log(`Selected category: ${category}`);
    this.products = this.productService.getCategory(category);
  }
}
