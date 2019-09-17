import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  loginStatusObservable = new BehaviorSubject<boolean>(false);

  loginStatus = this.loginStatusObservable.asObservable();
  constructor(private http: HttpClient) {
    this.loginStatusObservable.next(localStorage.getItem('loginStatus') === 'true');
  }

  registerUser(userValue: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.apiBaseUrl + '/user/register', userValue, httpOptions);
  }

  loginUser(userValue: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.apiBaseUrl + '/user/login', userValue, httpOptions);
  }

  logout() {
    localStorage.clear();
    this.loginStatusObservable.next(false);
  }
}
