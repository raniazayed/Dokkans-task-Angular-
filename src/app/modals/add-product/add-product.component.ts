import { GetCategoriesService } from './../../services/get-categories.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  allproducts: any;
  product: any;
  catname: any;
  categoryName: any;

  constructor(private catser:GetCategoriesService,public dialogRef:MatDialogRef<AddProductComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private route:Router,private router:ActivatedRoute) { }
  addproduct:FormGroup
  ngOnInit() {
    this.addproduct= new FormGroup({
      prodId: new FormControl(null),
      code: new FormControl(null),
      price: new FormControl(null),
      prodName: new FormControl(null),
      flag: new FormControl(null)


    });
  }
  // ADD NEW PRODUCT
  onSubmit(form){
    console.log(form.value)
    form.value.flag=false
    this.allproducts=this.catser.listofcategories;
    console.log(this.allproducts.length)
    
  for(let i=0; i<this.allproducts.length; i++){
    console.log(i)
    if(this.allproducts[i].categoryName==this.data){
      // debugger;
      if(this.allproducts[i].products){
        form.value.prodId=this.allproducts[i].products[this.allproducts[i].products.length-1].prodId+1;
        console.log(this.allproducts[i].products)
        this.allproducts[i].products.push(form.value)
        localStorage.setItem("categories",JSON.stringify(this.allproducts))
        this.catser.getCategories();
        this.route.navigate(['categorydetails',`${this.data}`])

      }else{
        this.allproducts[i].products;
        this.allproducts[i].products=[]
        form.value.prodId=this.allproducts[i].products.length+1;
        this.allproducts[i].products.push(form.value)
        console.log(this.allproducts[i].products)
       localStorage.setItem("categories",JSON.stringify(this.allproducts))
       this.catser.getCategories();
       this.route.navigate(['categorydetails',`${this.data}`])
      }
      
    }
  }
  this.dialogRef.close()
  }
}
