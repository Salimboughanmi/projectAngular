import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, nbrmax :number): string {
    if (value.length <nbrmax) {
      return  value;
    }else{
      return value.substring(0,nbrmax)+'...'
    }
  }

}
