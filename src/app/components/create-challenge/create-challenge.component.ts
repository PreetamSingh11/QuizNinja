import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { Question } from 'src/app/models/question.model';
import { ArrayService } from 'src/app/services/array.service';


@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  selectedCategory: string;
  categories: string[];
  questionLevels: string[] = ['Easy', 'Intermediate', 'Advanced'];
  selectedLevel: string;

  optionArray: Array<any> = ['A', 'B'];

  myQuestion: Question;
  questionErrMsg: string;

  slideSelectCategory = true;
  slideAddQuestion = false;
  slideGetAnswaare = false;


  addOptionBtnVisibliity = true;
  removeOptionBtnVisibility = false;


  questionForm: FormGroup;

  constructor(private utilService: UtilsService, private arrayService: ArrayService, private formBuilder: FormBuilder) {
    this.categories = utilService.getCetegoriesList();
  }

  ngOnInit() {
  }

  initQuestionForm() {
    this.questionForm = this.formBuilder.group({
      question: new FormControl('', [Validators.required]),
      optionType: new FormControl(null, [Validators.required]),
      options: new FormArray([], [Validators.required])
    });
    this.opt.push(this.formBuilder.control('', [Validators.required]));
    this.opt.push(this.formBuilder.control('', [Validators.required]));
  }

  get f() { return this.questionForm.controls; }
  get opt() { return this.f.options as FormArray; }

  selecteCategory() {
    this.utilService.setSelectedCategory(this.selectedCategory);
    this.slideAddQuestion = true;
    this.slideSelectCategory = false;
    this.selectedLevel = undefined;
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
    const nextOption = this.utilService.getNextLetter(this.optionArray[this.optionArray.length - 1]);
    if (this.optionArray.length <= 5) {
      this.opt.push(this.formBuilder.control('', [Validators.required]));
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
    const questionObject = this.questionForm.value;
    this.myQuestion = {
      question: questionObject.question,
      optionType: questionObject.optionType,
      category: this.selectedCategory,
      options: questionObject.options,
      level: this.selectedLevel,
      answares: []
    };
    if (this.validQuestionObject()) {
      this.questionErrMsg = '';
      this.slideAddQuestion = false;
      this.selectAnsware();
    } else {
      this.questionErrMsg = 'Something is wrong!';
    }
  }

  checkedOptions(value: any, checked: any) {
    if (checked) {
      this.myQuestion.answares.push(value);
    } else {
      this.myQuestion.answares = this.arrayService.removeElement(this.myQuestion.answares, value);
    }
  }

  addLevel() {
    this.myQuestion.level = this.selectedLevel;
  }

  submitQuestion() {
    console.log(JSON.stringify(this.myQuestion));
  }

  validQuestionObject() {
    const temp = this.myQuestion.options.map(option => option.trim().length !== 0);
    if (this.myQuestion.question.trim().length === 0 || !temp.every(value => true === value)) {
      return false;
    } else {
      this.myQuestion.question = this.myQuestion.question.trim();
      this.myQuestion.options = this.myQuestion.options.map(option => option.trim());
    }
    return true;
  }

}
