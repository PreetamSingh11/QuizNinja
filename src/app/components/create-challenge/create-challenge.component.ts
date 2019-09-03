import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
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

  slideSelectCategory = true;
  slideAddQuestion = false;
  slideGetAnswaare = false;


  addOptionBtnVisibliity = true;
  removeOptionBtnVisibility = false;


  questionForm: FormGroup;

  constructor(private utilService: UtilsService, private formBuilder: FormBuilder) {
    this.categories = utilService.getCetegoriesList();
  }

  ngOnInit() {
  }

  initQuestionForm() {
    this.questionForm = this.formBuilder.group({
      question: new FormControl(''),
      optionType: new FormControl(null),
      options: new FormArray([])
    });
    this.opt.push(this.formBuilder.control(''));
    this.opt.push(this.formBuilder.control(''));
  }

  get f() { return this.questionForm.controls; }
  get opt() { return this.f.options as FormArray; }

  selecteCategory() {
    this.utilService.setSelectedCategory(this.selectedCategory);
    this.slideAddQuestion = true;
    this.slideSelectCategory = false;
    this.initQuestionForm();
  }

  backToSelectCategory() {
    this.selectedCategory = undefined;
    this.slideAddQuestion = false;
    this.slideSelectCategory = true;
  }

  backToAddQtn() {
    this.slideAddQuestion = true;
    this.slideGetAnswaare = false;
  }

  selectAnsware() {
    this.slideGetAnswaare = true;
  }

  addOption() {
    const nextOption = this.getNextLetter(this.optionArray[this.optionArray.length - 1]);
    if (this.optionArray.length <= 5) {
      this.opt.push(this.formBuilder.control(''));
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
      this.opt.removeAt(this.opt.length - 1);
      this.optionArray.pop();
      this.addOptionBtnVisibliity = true;
      if (this.optionArray.length === 2) {
        this.removeOptionBtnVisibility = false;
      }
    }
  }

  onQuestionSubmit() {
    this.slideAddQuestion = false;
    console.log(this.questionForm.value);
    this.selectAnsware();
  }

  getNextLetter(char: string): string {
    let code = char.charCodeAt(0);
    code++;
    return String.fromCharCode(code);
  }
}
