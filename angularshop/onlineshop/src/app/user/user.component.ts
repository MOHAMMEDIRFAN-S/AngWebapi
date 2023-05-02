import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() pMessage:any="";
  @Output() cMessage:any=new EventEmitter();
  
todayDate= new Date();
stationary=["pen","pencil","paper","Eraser","sharpner"];
userDetails={
  uid:"U101",
  username:"Anu",
  mobno:"9842731771"
}

  sendmessage()
  {
    this.cMessage.emit("Hey parent! i am your child");
  }



}
