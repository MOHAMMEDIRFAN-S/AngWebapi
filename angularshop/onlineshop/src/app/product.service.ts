import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private client:HttpClient) {}
    getproductRecord()
    {
      return this.client.get("https://jsonplaceholder.typicode.com/posts");
    }
    getbyIdproductRecord(id:number)
    {
      return this.client.get("https://jsonplaceholder.typicode.com/posts/"+id);
    }
    postproductRecord(data:any)
    {
      return this.client.post("https://jsonplaceholder.typicode.com/posts",data);
    }
}
