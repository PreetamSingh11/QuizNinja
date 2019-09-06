import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormGroup;
  categories: string[];

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) {
    this.categories = this.utilsService.getCetegoriesList();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });


    this.signUpForm = this.formBuilder.group({
      username: '',
      s_email: '',
      s_password: '',
      s_confirm_password: '',
      s_category: ''
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  register() {
    console.log(this.signUpForm.value);
  }

}
