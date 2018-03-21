import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserLoginModel } from '../../login/user-login.model';
import { UserRoles } from './user-roles.enum';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userId: string;
  currentUser: UserLoginModel = new UserLoginModel();
  roles: Array<string> = [];

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.loginService.getUserBy(this.userId).subscribe((user) => {
        this.currentUser = this.loginService.getCurrentLoginUser();
        this.getRoles();
      })
    })
  }

  logOut() {
    this.loginService.changeLoging(this.currentUser, false).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

  getRoles() {
    this.loginService.getUserRoles(this.currentUser.login).subscribe((data) => {
      if (data) {
        this.roles = data[0].roles;
      }
    })
  }

  isApprover() {
    return this.roles.indexOf(UserRoles.APPROVER) != -1;
  }

  isUser() {
    return this.roles.indexOf(UserRoles.USER) != -1
  }
}
