import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryService} from "./categories/category.service";

import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
