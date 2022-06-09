import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductComponent } from './Component/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
