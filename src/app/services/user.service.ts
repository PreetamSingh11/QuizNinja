import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginStatus: boolean;
  constructor(private http: HttpClient) {
    this.loginStatus = false;
  }

  getLoginStatus() {
    return this.loginStatus;
  }

  registerUser(userValue: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(environment.apiBaseUrl + '/user/register', userValue, httpOptions)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        }))
      .subscribe(data => console.log(data));
  }

  loginUser(userValue: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(environment.apiBaseUrl + '/user/login', userValue, httpOptions)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        }))
      .subscribe(data => console.log(data));
  }
}
