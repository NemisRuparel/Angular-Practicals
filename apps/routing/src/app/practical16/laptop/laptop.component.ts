import { Component } from '@angular/core';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  laptops = [
    {
      name: 'HP 15s Ryzen 5',
      price: 40999,
      image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08679778_3.png'
    },
    {
      name: 'Dell Inspiron 15',
      price: 47999,
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7440/media-gallery/laptop-inspiron-14-plus-in7440nt-bl-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=643&qlt=100,1&resMode=sharp2&size=643,402&chrss=full'
    },
    {
      name: 'Lenovo IdeaPad Slim 3',
      price: 36999,
      image: 'https://p1-ofp.static.pub//fes/cms/2024/04/01/load5pfb9sq0wymcbqzbqfsc7zkk1x066526.png'
    }
  ];
}
