import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MdToolbarModule,
  MdGridListModule,
  MdTabsModule,
  MdButtonModule,
  MdSelectModule,
  MdIconModule,
  MdInputModule
} from '@angular/material';

import { ProductService, ShoppingCartService } from './shared/services';
import { AppComponent } from './app.component';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';
import { routes } from './app.routing';
import { CartComponent, CartResolver } from './cart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    HttpClientModule,
    MdGridListModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdTabsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MdButtonModule,
    MdSelectModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [
    ProductService,
    ShoppingCartService,
    CartResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
