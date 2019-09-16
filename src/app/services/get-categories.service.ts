import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  listofcategories: void;
  categories: { "categoryName": string; "products": { "prodId": number; "code": number; "prodName": string; "price": number; "flag": boolean; }[]; }[];

  constructor(private http:HttpClient) { 

    this.categories=[
      {"categoryName":"food","products":[{"prodId":0,"code":10,"prodName":"sugar", "price":200,"flag":false},{"prodId":1,"code":11,"prodName":"tea", "price":200,"flag":false},{"prodId":2,"code":12,"prodName":"water", "price":200,"flag":false}]},
      {"categoryName":"electronics","products":[{"prodId":0,"code":20,"prodName":"mouse", "price":100,"flag":false},{"prodId":1,"code":21,"prodName":"keyboard", "price":100,"flag":false}]},
      {"categoryName":"execessories","products":[{"prodId":0,"code":30,"prodName":"ring", "price":50,"flag":false},{"prodId":1,"code":31,"prodName":"necklace", "price":50,"flag":false}]}
    ]
    
    // this.listofcategories = JSON.parse(localStorage.getItem("categories"))
    if(JSON.parse(localStorage.getItem("categories"))){
      // debugger;
      // this.listofcategories=JSON.parse(localStorage.getItem("categories"))
      this.getCategories();
      console.log(this.listofcategories)
    }else{
      // debugger;

      localStorage.setItem("categories",JSON.stringify(this.categories));
      this.listofcategories=JSON.parse(localStorage.getItem("categories"))
      console.log(this.listofcategories)

    }
  }
  jsonUrl:string='assets/products.json'
  getCategories(){
    this.listofcategories = JSON.parse(localStorage.getItem("categories"))

  }

}
