import { ProductService } from './shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'ngs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    productService: ProductService
  ) {
    productService.getAll()
      .subscribe(products => console.log(products));
  }


}
