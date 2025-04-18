import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/practical10/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = this.productService.getProducts();
  constructor(private productService: ProductService, private router: Router) {}
  viewDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}