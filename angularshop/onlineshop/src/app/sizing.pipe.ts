import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizing'
})
export class SizingPipe implements PipeTransform {

  transform(size: any): string {
if(size>15 && size<=23) 
{
  return "S"
} 
else if(size>25 && size<=33) 
{
  return "M"
} 
else if(size>35 && size<=43)

{
  return "L"
} 
else if(size>45 && size<=53)

{
  return "XL"
} 
 if(size>55 && size<=63)

{
  return "XXL"
} 
return "XXXL";
}

}
