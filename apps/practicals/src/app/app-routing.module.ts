import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './practical10/pages/product-list/product-list.component';
import { ProductDetailComponent } from './practical10/pages/product-detail/product-detail.component';
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: '', redirectTo: 'students', pathMatch: 'full' },
// { path: 'students', component: StudentComponent }
// import { StudentComponent } from "./practical12/student/student.component";