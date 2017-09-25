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
  MdIconModule
} from '@angular/material';

import { ProductService, ShoppingCartService } from './shared/services';
import { AppComponent } from './app.component';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent
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
    MdIconModule
  ],
  providers: [
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
