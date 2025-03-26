import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchQuery: any): any[] {
    return products.filter(items=> {

      return items.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    )
  }

}
