import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import only those RxJS operators that you need
import 'rxjs/add/operator/mergeMap';

import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // Subscribe to changes of productId (e.g. if the user changes the URL to see another product)
    // route.params is an observable
    // We use `mergeMap` because getProductById() returns an Observable
    this.route.params
      .mergeMap(({ productId }) => this.productService.getProductById(productId))
      .subscribe(product => this.product = product);
  }
}
