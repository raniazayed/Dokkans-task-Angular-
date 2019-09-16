import { GetCategoriesService } from './../../../services/get-categories.service';
import { GetProductsService } from './../../../services/get-products.service';
import { EditProductComponent } from './../../../modals/edit-product/edit-product.component';
import { Category } from './../../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCategoryComponent } from 'src/app/modals/add-category/add-category.component';
import { AddProductComponent } from 'src/app/modals/add-product/add-product.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})

export class CategoryDetailsComponent implements OnInit {
  // allproducts:any
  categoryName: string;
  value: any;
  p: number = 1;
  allproducts: any = [];
  config: any;
  currentPage: string;
  ids: any=[]
  deletedItems: void;
  theCheckbox=false
  filteredarray: any;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private getprodser: GetProductsService,private getcatser:GetCategoriesService) {
    this.config = { itemsPerPage: 1, currentPage: this.getcurrentPage }

  }
  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name');
    this.getprodser.getproducts(this.categoryName)
    this.getcurrentPage();
    console.log(this.categoryName)
    this.getcatser.listofcategories
    this.getproducts()
    
  }
  getproducts(){
    this.allproducts = this.getprodser.allproducts
    console.log(this.allproducts)
  }
  // ADD NEW PRODUCT
  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px',
      data: this.categoryName

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  //EDIT PRODUCT
  editProduct(product): void {

    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '500px',
      data: { name: this.categoryName, id: product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getproducts()
    });
  }
  // DELETE PRODUCTS
  deleteproduct() {
    console.log(this.allproducts)
    console.log(this.getcatser.listofcategories)
    this.allproducts=this.allproducts.filter(elem=>{

      return elem.flag==false
    })
    console.log(this.filteredarray)
    localStorage.setItem("categories",JSON.stringify( this.getcatser.listofcategories))

  }
  sendId(id,e){ 

      console.log(this.allproducts)
      console.log(e.target.checked)
    this.deletedItems=this.allproducts.filter(elem=>{
      console.log(elem)
      return elem.prodId ==id
    })
    console.log(this.deletedItems)
    if(e.target.checked==true){
      this.deletedItems[0].flag=e.target.checked;
      console.log(this.deletedItems[0].flag)
      console.log(this.allproducts)

    }else{
      this.deletedItems[0].flag=false
      console.log(this.deletedItems[0].flag)
    }
    localStorage.setItem("categories",JSON.stringify( this.getcatser.listofcategories))
  
   
  }
  takeValue(e) {
    console.log(e.target.checked)
    if (e.target.checked == true) {
      console.log("delete")
    }
  }
  getcurrentPage() {
    this.currentPage = this.route.snapshot.paramMap.get('id');
  }
  pageChange(newPage: number) {
    console.log(newPage)
    console.log(this.currentPage)
    this.getproducts()
    this.router.navigate(['/categorydetails',`${this.categoryName}`], { queryParams: { page: newPage } });
  	// this.router.navigate(['/categorydetails',`${this.categoryName}${newPage}`]);
  }
}
