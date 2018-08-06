import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from '../categories/category-list/category-list.component';
import { CategoryDetailsComponent } from '../categories/category-details/category-details.component';

const routes: Routes = [

  {
    //start page localhost:4200 - CategoryList
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'categoryDetails/:id',
    component: CategoryDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
