import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {

  constructor() { }
  count:number=0;
  incrementCount()
  {
    this.count=this.count+1;
   alert(this.count)
  
  }

}


