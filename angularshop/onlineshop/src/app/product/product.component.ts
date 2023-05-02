import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product:any=[
    {
        pid:"P101",
        pname:"Redmi",
        price:'2300'
    },
    {
      pid:"P102",
      pname:"realme",
      price:'7300'
  },
  {
    pid:"P103",
    pname:"Vivo",
    price:'2900'
}
  ];
  status:boolean=true;

  Status()
  {
    this.status=!this.status;
  }
  role:any="";
}
