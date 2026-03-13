import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone',
  standalone: false
})
export class MaskPhonePipe implements PipeTransform {

  transform(value: string | null, ...args: string[]): string {
     let str = '';
    if (value){
      for(let i = 0; i < value.length; i ++){
        if(i % 2 == 0) str += value[i].toUpperCase()
        else str += value[i].toLowerCase();
      }
    }
    return str;
  }
}
