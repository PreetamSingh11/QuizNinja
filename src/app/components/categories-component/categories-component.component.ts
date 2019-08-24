import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-component',
  templateUrl: './categories-component.component.html',
  styleUrls: ['./categories-component.component.css']
})
export class CategoriesComponentComponent implements OnInit {

  categories = ['Programming', 'Politics', 'Sports', 'History', 'Science'];
  constructor() {
    this.categories.sort();
    this.categories.push('Others');
  }

  ngOnInit() { }

}
