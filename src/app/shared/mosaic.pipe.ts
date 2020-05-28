import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mosaic'
})
export class MosaicPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    console.log('pipe', value, args);
    const valueArr = value.split('');
    return valueArr[0] + '****' + valueArr[valueArr.length - 1];
  }

}
