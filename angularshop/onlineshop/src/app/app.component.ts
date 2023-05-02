import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 // template:"<h1>Hello</h1>",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineshop';
  name="mohammed";
  Company="Aspire";
  position="center";
  message="welcome";
  employeeName="Your name please" ; //Property binding
  parentMessage="I am your parent";
  childMessage="Yet to receive a message";


  changemessage()
  {
    this.message="Chennai";
  }


 

}
