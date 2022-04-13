import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchItem: any) {
    if(value.length === 0 || searchItem === undefined) {
      return value;
    } else {
      return value.filter((search) => {
        return search.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
      });
    }
  }
}
