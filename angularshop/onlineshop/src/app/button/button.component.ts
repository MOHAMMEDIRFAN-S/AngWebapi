import { Component } from '@angular/core';
import { IncrementService } from '../increment.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(public service:IncrementService){}
  
  BCount(){
    this.service.incrementCount();
  }
}
