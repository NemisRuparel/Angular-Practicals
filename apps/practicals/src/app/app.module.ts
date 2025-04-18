import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrvComponent } from './trv/trv.component';
import { Practical7Component } from './practical7/practical7.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { FilterPipe } from './productfilter/filter.pipe';
import {FormsModule} from '@angular/forms';
import { ProductItemComponent } from './practical9/product-item/product-item.component';
import { CartComponent } from './practical9/cart/cart.component';
import { LifecycleComponent } from './practical11/lifecycle-component/lifecycle-component.component';
import { Practical10Component } from './practical10/practical10.component';
import { ProductDetailComponent } from './practical10/pages/product-detail/product-detail.component';
import { ProductListComponent } from './practical10/pages/product-list/product-list.component';
import { StudentserviceService } from './studentservice.service';
import { StudentComponent } from './practical12/student/student.component';
import { Practical13Service } from "./practical13.service";
import { StudentService } from './practical14/student.service';
import { StudComponent } from './practical14/stud/stud.component';



@NgModule({
  declarations: [
    AppComponent,
    TrvComponent,
    Practical7Component,
    ProductfilterComponent,
    FilterPipe,
    ProductItemComponent,
    CartComponent,
    LifecycleComponent,
    Practical10Component,
    ProductDetailComponent,
    ProductListComponent,
    StudentComponent,
    StudComponent,
    
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentserviceService,
  Practical13Service,
  StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
