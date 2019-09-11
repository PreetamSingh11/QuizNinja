import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormGroup;
  categories: string[];

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService, private userService: UserService) {
    this.categories = this.utilsService.getCetegoriesList();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });


    this.signUpForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      categories: ''
    });
  }

  login() {
    this.userService.loginUser(JSON.stringify(this.loginForm.value));
  }

  register() {
    this.userService.registerUser(JSON.stringify(this.signUpForm.value));
  }

}
