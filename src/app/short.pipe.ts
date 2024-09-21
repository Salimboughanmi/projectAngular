import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value.length <14) {
      return  value;
    }else{
      return value.substring(0,13)+'...'
    }
  }

}
