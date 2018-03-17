import { Component, OnInit } from '@angular/core';
import { UserRequestService } from './user-requests.service';
import { PermissionModel } from './permission.model';
import { LoginService } from '../../login/login.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit {

  userPermissions: Array<PermissionModel> = [];
  userId: string;
  constructor(private userRequestService: UserRequestService, private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.getUserPermissions();
    })
  }
  getUserPermissions(){
    debugger
    this.loginService.getUserBy(this.userId).subscribe((user)=>{
      this.userRequestService.getPermissionRequests(user.login).subscribe((permissions) => {
        this.userPermissions = permissions;
      });
    });
  }

  remove(id){
    this.userRequestService.remove(id).subscribe(()=>{
      this.getUserPermissions();
    })
  }

  addedPermissionListener(info){
    console.log(info);
    this.getUserPermissions();
  }
}
