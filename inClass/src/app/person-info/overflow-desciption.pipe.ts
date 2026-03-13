import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overflowDesciption',
  standalone: false
})
export class OverflowDesciptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0, 100) + '...';
  }

}
