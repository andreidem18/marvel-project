import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    return value.length < maxLength 
      ? value 
      : value.slice(0, maxLength) + '...';
  }

}
