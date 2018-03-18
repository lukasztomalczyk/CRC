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
      this.checkIsUserLogin(this.userId);
    })
  }

  checkIsUserLogin(id: string) {
    this.loginService.getUserBy(id).subscribe((user) => {
      this.setValuesAfterLogin(user);
    })
  }

  setValuesAfterLogin(user) {
    this.loginService.setCurrentLoginUser(user);
    this.currentUser = this.loginService.getCurrentLoginUser();
    this.getRoles(user.login);
  }

  logOut() {
    this.loginService.changeLoging(this.currentUser, false).subscribe(() => {
      this.checkIsUserLogin(this.currentUser.id);
      this.router.navigate(['/login'])
    })
  }

  getRoles(login: string) {
    this.loginService.getUserRoles(login).subscribe((data) => {
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
