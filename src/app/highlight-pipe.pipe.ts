import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe'
})
export class HighlightPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price;
  }

}
