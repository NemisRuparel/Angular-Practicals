import { Component } from '@angular/core';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent {
  tablets = [
    {
      name: 'Samsung Galaxy Tab A8',
      price: 17999,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x926bzaains/gallery/in-galaxy-tab-s10-ultra-sm-x920-524848-sm-x926bzaains-thumb-543760150?$240_240_PNG$'
    },
    {
      name: 'Redmi Pad SE',
      price: 15999,
      image: 'https://i03.appmifile.com/812_item_in/20/09/2024/de184b8affba8a484b8f63930c6fc6a0.png?thumb=1&w=1000&f=webp&q=85'
    },
    {
      name: 'Apple iPad 9th Gen',
      price: 30999,
      image: 'https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_air_6ec53cb36_2x.png'
    }
  ];
  }