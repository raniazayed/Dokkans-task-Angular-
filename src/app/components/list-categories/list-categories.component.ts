import { AddCategoryComponent } from './../../modals/add-category/add-category.component';
import { GetCategoriesService } from './../../services/get-categories.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  allCategories: any;

  constructor(private getcatSer:GetCategoriesService,public dialog: MatDialog) { 
    // debugger
  }

  ngOnInit() {
    // debugger
   this.allCategories =this.getcatSer.listofcategories;
   console.log(this.allCategories)

  }
  // OPEN MODAL
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '500px'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
