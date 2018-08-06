import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Category} from './category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoryService {

  //TESTING API
  private categoriesUrl = 'api/category';

  constructor(private http: HttpClient) {}


  // GET CATEGORIES

  // get("adressApi/categories")
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }

  //GET SELECTED CATEGORY

  // get("adressApi/categories/id")
  getSelectedCategory(id:number):Observable<Category>{
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
        catchError(this.handleError<Category>(`getSelectedCategory id=${id}`))
      );
  }


  // CREATE AND ADD CATEGORY

  // post("adressAPI/categories")
  createCategory(createdCategory: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, createdCategory, httpOptions)
      .pipe(
        catchError(this.handleError<Category>('createCategory'))
      );
  }


  // UPDATE CATEGORY

  // put(adresApi/categories/{categoryId})
  updateCategory(updatedCategory: Category): Observable<any> {
    return this.http.put(this.categoriesUrl, updatedCategory, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateCategory'))
      );
  }


  // DELETE CATEGORY

  // delete(adressAPI/categories/{categoryId})
  deleteCategory(deleteCategoryId: number): Observable<any> {
    const url = `${this.categoriesUrl}/${deleteCategoryId}`;
    return this.http.delete<Category>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Category>('deleteCategory'))
      );
  }


  // ERROR HANDLING
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);
      return of(result as T);
    };
  }

}
