import { Component } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: { id: number; name: string; price: number; quantity: number }[] = [];
  addToCart(product: { id: number; name: string; price: number; quantity: number }) {
    this.cartItems = [...this.cartItems, { ...product, quantity: 1 }];
  }
calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
