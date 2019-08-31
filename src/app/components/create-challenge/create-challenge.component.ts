import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/servies/utils.service';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  selectedCategory: string;
  categories: string[];

  optionArray: Array<any> = ['A', 'B'];
  addOptionBtnVisibliity = true;
  removeOptionBtnVisibility = false;

  constructor(private utilService: UtilsService) {
    this.categories = utilService.getCetegoriesList();
  }

  ngOnInit() {
  }

  selecteCategory() {
    this.utilService.setSelectedCategory(this.selectedCategory);
  }

  addOption() {
    if (this.optionArray.length <= 5) {
      const nextOption = this.getNextLetter(this.optionArray[this.optionArray.length - 1]);
      this.optionArray.push(nextOption);
      if (this.optionArray.length === 5) {
        this.addOptionBtnVisibliity = false;
      } else {
        this.removeOptionBtnVisibility = true;
      }
    }
  }

  removeOption() {
    if (this.optionArray.length >= 2) {
      this.optionArray.pop();
      this.addOptionBtnVisibliity = true;
      if (this.optionArray.length === 2) {
        this.removeOptionBtnVisibility = false;
      }
    }
  }

  getNextLetter(char: string): string {
    let code = char.charCodeAt(0);
    code++;
    return String.fromCharCode(code);
  }

}
