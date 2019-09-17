import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginStatus: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loginStatusObservable.subscribe(loginStatus => this.loginStatus = loginStatus);
  }

  logout() {
    this.userService.logout();
  }

}
