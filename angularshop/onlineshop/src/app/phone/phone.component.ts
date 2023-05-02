import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{
  jin:any=[];
  sample:any
  postdata:any={
    
    userId: 1,
    title: "Irfan",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  
  }
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getproductRecord().subscribe(data=>{
      this.jin=data;
    })
    this.service.getbyIdproductRecord(6).subscribe(data=>{
      this.sample=data
      console.log(this.sample)
      this.sample.id=0
    })
   
  }
  post(){
    console.log(this.postdata)
    this.service.postproductRecord(this.postdata).subscribe({
      next:()=>{
        console.log("sucesss");
      },
      complete:()=>{
        console.log("done")
      }
    })
  }
}
