import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';
import { UtilsService } from 'src/app/services/utils.service';
import { UserService } from 'src/app/services/user.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as $AB from 'jquery';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  @ViewChild('signUpModel', { static: false }) signUpModel: ElementRef;

  loginForm: FormGroup;
  signUpForm: FormGroup;
  categories: string[];
  progressbarVisible: boolean;
  loginProgressbarVisible: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private userService: UserService,
    private ngFlashMessageService: NgFlashMessageService) {
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
    this.loginProgressbarVisible = true;
    setTimeout(() => {
      this.userService.loginUser(JSON.stringify(this.loginForm.value))
        .pipe(
          catchError(error => {
            this.loginProgressbarVisible = false;
            this.ngFlashMessageService.showFlashMessage({
              messages: [error.error],
              dismissible: true,
              timeout: false,
              // Type of flash message, it defaults to info and success, warning, danger types can also be used
              type: 'danger'
            });
            return throwError(error.error);
          }))
        .subscribe(token => {
          console.log(token);
          localStorage.setItem('token', token.toString());
          localStorage.setItem('loginStatus', 'true');
          this.userService.loginStatusObservable.next(true);
          this.loginProgressbarVisible = false;
        });
    }, 3000);

  }

  register() {
    this.progressbarVisible = true;
    this.signUpForm.value.categories = Object.assign({}, {
      categories: this.signUpForm.value.categories.map(categoty => {
        return {
          name: categoty
        };
      })
    });
    this.signUpForm.value.categories = this.signUpForm.value.categories.categories;
    this.userService.registerUser(JSON.stringify(this.signUpForm.value))
      .pipe(
        catchError(error => {
          this.ngFlashMessageService.showFlashMessage({
            messages: [error.error],
            dismissible: true,
            timeout: 3000,
            // Type of flash message, it defaults to info and success, warning, danger types can also be used
            type: 'danger'
          });
          this.progressbarVisible = false;
          return throwError(error.error);
        }))
      .subscribe(data => {
        console.log(data);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Registered successfully'],
          dismissible: true,
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'success'
        });
        this.progressbarVisible = false;
        setTimeout(() => {
          $(this.signUpModel.nativeElement).modal('hide');
        }, 1000);
      });
  }

}
