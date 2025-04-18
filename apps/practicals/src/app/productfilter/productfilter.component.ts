import { Component } from '@angular/core';
@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent {
  todaydate=new Date();
  searchQuery:any='';
  products=[
  {name:'laptop',price:55000,image:'assets/laptop.jpg'},
  {name:'tablet',price:45000,image:'assets/tablet.jpg'},
  {name:'telivision',price:20000,image:'assets/tv.jpg'},
  {name:'mobile',price:60000,image:'assets/mobile.jpg'}
]
}
