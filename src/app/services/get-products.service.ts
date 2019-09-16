import { GetCategoriesService } from './get-categories.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  allproducts: any;
  allproduct:any
  constructor(private catser:GetCategoriesService) { }
  getproducts(categoryName){
    
    this.allproduct = this.catser.listofcategories;
    for( let i=0; i<this.allproduct.length; i++){
      if(this.allproduct[i].categoryName==categoryName){
        if(this.allproduct[i].products){
          this.allproducts=this.allproduct[i].products
          console.log(this.allproducts)
        }else{
          this.allproducts=0
        }
      }
    }
  }
}
