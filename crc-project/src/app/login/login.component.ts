import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserLoginModel } from "./user-login.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.loginService.logInUser(this.login, this.password).subscribe((users) => {
      if (users.length > 0) {
        this.loginService.changeLoging(users[0], true).subscribe(() => {
          this.router.navigate(['/userForm', users[0].id]);
        });
      }
    })
  }

}
