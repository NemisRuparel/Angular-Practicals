import { Component } from '@angular/core';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  mobiles = [
    {
      name: 'Vivo V27',
      price: 29999,
      image: 'https://i.pinimg.com/474x/95/4b/a2/954ba216e6ff61b623ff56ea60c988e4.jpg'
    },
    {
      name: 'Samsung Galaxy Z fold 5',
      price: 13499,
      image: 'https://i.pinimg.com/474x/82/95/51/82955150bf508bc7177a9c1ef66c5cba.jpg'
    },
    {
      name: 'Iphone 15 pro max',
      price: 110999,
      image: 'https://i.pinimg.com/474x/d3/30/41/d330412c6095a526ab6d21c6008cb8eb.jpg'
    }
  ];
}
