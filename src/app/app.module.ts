
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {RouterModule , Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/http-services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    StoresListComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule ,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
