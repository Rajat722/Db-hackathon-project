import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alertType'
})
export class DataAlertPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLocaleLowerCase() == 'g'){
      return 'Geographical'
    }
    else if (value.toLocaleLowerCase() == 'f'){
      return 'Facial'
    }
    else{
      return 'Unknown'
    }

  }



}
