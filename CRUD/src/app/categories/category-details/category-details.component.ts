import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category} from "../category";
import { CategoryService} from "../category.service";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],

})
export class CategoryDetailsComponent implements OnInit {
  @Input() category : Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private location: Location) {}

  ngOnInit() {
    this.getEditedCategory();
  }

  // SHOWS SELECTED CATEGORY
  getEditedCategory():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getSelectedCategory(id)
      .subscribe(category=> this.category = category);

  }

  //SAVES CHANGES
  saveCategoryChanges(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.cancelEditing());
  }

  // CANCELS EDITING
  cancelEditing():void{
    this.location.back();
  }

}
