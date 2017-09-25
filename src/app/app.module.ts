import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdGridListModule } from '@angular/material';

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
    MdGridListModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
