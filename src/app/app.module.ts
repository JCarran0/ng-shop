import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MdToolbarModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

import { ProductService } from './shared/services';
import { AppComponent } from './app.component';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent } from './product';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    HttpClientModule,
    MdGridListModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdTabsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
