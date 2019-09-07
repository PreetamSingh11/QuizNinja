import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginStatus: boolean;
  constructor() {
    this.loginStatus = true;
  }

  getLoginStatus() {
    return this.loginStatus;
  }
}
