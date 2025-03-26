import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrvComponent } from './trv/trv.component';
import { Practical7Component } from './practical7/practical7.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { FilterPipe } from './productfilter/filter.pipe';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TrvComponent,
    Practical7Component,
    ProductfilterComponent,
    FilterPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
