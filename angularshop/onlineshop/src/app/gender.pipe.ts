import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: any,gender?: any): String {
    if(gender=="M")
    {
      return "Mr."+name;
    }
        return "Ms."+name;
  }

}
