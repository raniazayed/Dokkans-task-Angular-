import { GetCategoriesService } from './../../services/get-categories.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  newCategoryForm:FormGroup
  allproducts: any;
  constructor(public dialogRef:MatDialogRef<AddCategoryComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private catser:GetCategoriesService) { }

  ngOnInit() {
    this.newCategoryForm = new FormGroup({
      categoryName: new FormControl(null)
    });
  }

  //Submit form
  onSubmit(form){
    console.log(form.value); 
    this.allproducts =this.catser.listofcategories
    console.log(this.catser.listofcategories)  
    this.allproducts.push(form.value) 
    console.log(this.catser.listofcategories)  
    localStorage.setItem("categories",JSON.stringify(this.allproducts))
 
    this.dialogRef.close()

  }
}
