import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private category = new BehaviorSubject('');
  selectedCategory = this.category.asObservable();

  private categories = ['C', 'Java', 'Python', 'Go', 'Node.js'];
  constructor() {
    this.categories.sort();
  }

  getCetegoriesList() {
    return this.categories;
  }

  setSelectedCategory(category: string) {
    this.category.next(category);
  }
}
