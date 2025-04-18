  import { Component } from '@angular/core';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'practicals';
    products: { id: number; name: string; price: number; quantity: number }[] = [
      { id: 1, name: 'Laptop', price: 999, quantity: 5 },
      { id: 2, name: 'Phone', price: 599, quantity: 10 },
      { id: 3, name: 'Headphones', price: 99, quantity: 20 }
    ];
    }