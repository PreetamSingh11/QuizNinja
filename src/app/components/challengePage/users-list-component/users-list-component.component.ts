import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/servies/utils.service';

@Component({
  selector: 'app-users-list-component',
  templateUrl: './users-list-component.component.html',
  styleUrls: ['./users-list-component.component.css']
})
export class UsersListComponentComponent implements OnInit {

  selectedCategory: string;
  items = Array.from({ length: 100 }).map((_, i) => `${i}`);

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.selectedCategory.subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
      console.log(this.selectedCategory);
    });
  }

}
