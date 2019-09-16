import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,MatDialogModule
} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CategoryDetailsComponent } from './components/list-categories/category-details/category-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCategoryComponent } from './modals/add-category/add-category.component';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { EditProductComponent } from './modals/edit-product/edit-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    CategoryDetailsComponent,
    NavbarComponent,
    AddCategoryComponent,
    AddProductComponent,
    EditProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule ,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,MatDialogModule,NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddCategoryComponent,AddProductComponent,EditProductComponent]
})
export class AppModule { }
