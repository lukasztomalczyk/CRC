import { Component, OnInit } from '@angular/core';
import { UserRequestService } from './user-requests.service';
import { PermissionModel } from './permission.model';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit {

  userPermissions: Array<PermissionModel> = [];
  userId: string;
  constructor(private userRequestService: UserRequestService) { }

  ngOnInit() {
      this.getUserPermissions();
  }
  getUserPermissions(){
      this.userRequestService.getPermissionRequests().subscribe((permissions) => {
        this.userPermissions = permissions;
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
