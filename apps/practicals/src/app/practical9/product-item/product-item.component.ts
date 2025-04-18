import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: { id: number; name: string; price: number; quantity: number };
  @Output() addToCartEvent = new EventEmitter<{ id: number; name: string; price: number; quantity: number }>();
  addToCart() {
    if (this.product.quantity > 0) {
      this.addToCartEvent.emit(this.product);
    }
  }
}