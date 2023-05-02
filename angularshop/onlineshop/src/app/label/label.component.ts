import { Component } from '@angular/core';
import { IncrementService } from '../increment.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  constructor(private service:IncrementService){}
  LCount(){
    this.service.incrementCount();
  }


}

