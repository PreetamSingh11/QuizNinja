import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/servies/utils.service';

@Component({
  selector: 'app-challenge-main-component',
  templateUrl: './challenge-main-component.component.html',
  styleUrls: ['./challenge-main-component.component.css']
})
export class ChallengeMainComponentComponent implements OnInit {

  selectedCategory: string;
  categories: string[];
  constructor(private utilService: UtilsService) {
    this.categories = utilService.getCetegoriesList();
  }

  ngOnInit() {
  }

  selecteCategory() {
    this.utilService.setSelectedCategory(this.selectedCategory);
  }
}
