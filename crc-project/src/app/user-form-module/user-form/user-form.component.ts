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

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser.roles = [];
    this.route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.checkIsUserLogin(this.userId);
    })
  }

  checkIsUserLogin(id: string) {
    this.loginService.isUserLogIn(id).subscribe((user) => {
      this.loginService.setCurrentLoginUser(user);
      this.currentUser = this.loginService.getCurrentLoginUser();
      if (!this.currentUser.isLogin) { this.router.navigate(['/login']) }
    })
  }

  logOut() {
    this.loginService.changeLoging(this.currentUser, false).subscribe(() => {
      this.checkIsUserLogin(this.currentUser.id);
    })
  }

  isApprover() {
    return this.currentUser.roles.indexOf(UserRoles.APPROVER) != -1;
  }

  isUser() {
    return this.currentUser.roles.indexOf(UserRoles.USER) != -1
  }
}
