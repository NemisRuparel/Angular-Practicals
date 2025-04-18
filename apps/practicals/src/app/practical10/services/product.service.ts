import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1,
      name: 'Red T-Shirt',
      price: 499,
      image: 'https://i.pinimg.com/474x/7a/c4/1a/7ac41ab064ee6fe7ac3ba2585211a8f7.jpg',
      description: 'Comfortable cotton red t-shirt perfect for everyday use.'    },
    { id: 2,
      name: 'Blue Jeans',
      price: 999,
      image: 'https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stylish slim-fit blue jeans.' },
    { id: 3,
      name: 'Sneakers',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww',
      description: 'Trendy sneakers with a comfortable sole.' }
  ];
getProducts() {
    return this.products;
  }
getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
