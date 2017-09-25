import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

import { ProductService } from './shared/services';
import { AppComponent } from './app.component';
import { HomeComponent, ProductTileComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    HttpClientModule,
    MdGridListModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdTabsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
