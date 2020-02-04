import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDigits'
})
export class RemoveDigitsPipe implements PipeTransform {

  transform(value: string, stringCase: string = "upper"): string {
    let myArray = value.split('');
    myArray = myArray.filter((ele)=>!/^\d+$/.test(ele))
    value =myArray.join('');
    switch(stringCase){
      case 'upper': value = value.toUpperCase(); break;
      case 'lower': value = value.toLowerCase(); break;

    }
    return value;
  }

}
