import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { MdTabGroup } from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngs-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MdTabGroup) mdTabGroup: MdTabGroup;

  products: Observable<Product[]>;

  readonly categories = [
    'all',
    'featured',
    'latest',
    'sport'
  ];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.products = this.route.params
      .switchMap(({ category }) => {   // Note that we use destructuring here
        return category === 'all' ?
          this.productService.getAll() :
          this.productService.getCategory(category);
      });
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.router.navigate([category], { relativeTo: this.route.parent });
  }
}
