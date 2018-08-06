import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { CategoryService} from "../category.service";
import { Category} from "../category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers:[CategoryService]
})
export class CategoryListComponent implements OnInit {

  categories: Category [];
  newCategory: any = {};

  constructor(private categoryService: CategoryService,private router: Router) {};

  ngOnInit() {
    this.getCategories();

  }

  /*--------------PRIMARY FUNCTIONS-----------*/

  //GET LIST OF ALL ITEMS
  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }


  //CREATE NEW ITEM
  createNewCategory(categories: Category): void {
    this.categoryService.createCategory(categories as Category)
      .subscribe(categories => {
        this.categories.push(categories);
      });
  }

  //DELETE SELECTED ITEM
  deleteSelectCategory(deleteCategoryId: number): void {
    this.categories = this.categories.filter(category => category.id !== deleteCategoryId);
    this.categoryService.deleteCategory(deleteCategoryId).subscribe();
  }


  /*----------HANDLE FUNCTION--------------*/

  // ROUTING TO CATEGORY DETAILS FORM
  showCategoryDetailsForm(selectedCategoryId):void{
    this.router.navigate(['categoryDetails',selectedCategoryId]);
  }

}
