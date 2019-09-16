import { GetProductsService } from './../../services/get-products.service';
import { GetCategoriesService } from './../../services/get-categories.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editprodInfo:FormGroup
  categoryName: any;
  allproducts: any;
  product: any;
  editItem: any;
  code: any;
  
  constructor(public dialogRef:MatDialogRef<AddCategoryComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private catser:GetCategoriesService,private route:ActivatedRoute,private getprod:GetProductsService,private router:Router) { 
    console.log(data)
  }

  ngOnInit() {
   
    this.editprodInfo = new FormGroup({
      prodId:new FormControl(null),
      code: new FormControl(null),
      price: new FormControl(null),
      prodName: new FormControl(null),
      flag: new FormControl(null)

    });


  }
 //Submit form
 onSubmit(form){
  form.value.prodId=this.data.id;
  form.value.flag=false
  // ARRAY FROM LOCAL Storage
  this.allproducts =this.catser.listofcategories
  for( let i=0; i<this.allproducts.length; i++){
    if(this.allproducts[i].categoryName==this.data.name){     
       this.product =this.allproducts[i].products.map(elem=>{
        if(elem.prodId==this.data.id){
          elem=form.value;
        }
        return elem
      })
    
      this.allproducts[i].products=this.product;
      // debugger;
      localStorage.setItem("categories",JSON.stringify(this.allproducts))
      this.getprod.getproducts(this.data.name)
      this.router.navigate(['categorydetails',`${this.data.name}`])
      this.dialogRef.close();
      return this.allproducts[i].products
      
    }
  }


}
}
