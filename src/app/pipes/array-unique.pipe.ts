import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayUnique'
})
export class ArrayUniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value;
  }

}