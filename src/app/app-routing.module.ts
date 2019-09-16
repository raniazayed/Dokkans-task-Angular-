import { CategoryDetailsComponent } from './components/list-categories/category-details/category-details.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:ListCategoriesComponent},
  {path:"categorydetails/:name",component:CategoryDetailsComponent},
  {path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
