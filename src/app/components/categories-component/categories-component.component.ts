import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-categories-component',
  templateUrl: './categories-component.component.html',
  styleUrls: ['./categories-component.component.css']
})
export class CategoriesComponentComponent implements OnInit {

  categories: string[];
  constructor(private utilsService: UtilsService) {
    this.categories = this.utilsService.getCetegoriesList();
  }

  ngOnInit() { }

}
