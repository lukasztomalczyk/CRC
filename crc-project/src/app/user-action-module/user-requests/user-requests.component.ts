import { Component, OnInit } from '@angular/core';
import { UserRequestService } from './user-requests.service';
import { PermissionModel } from './permission.model';
import { AddPermissionService } from '../permission-request.service';


@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent implements OnInit {
  //4. Wydzielić logikę wnioskowania o uprawnienie do osobnego komponentu 'add-permission'
  //5.) W tym komonencie należy nasłuchiwać czy request został wysłany i wyświetlić do konsoli informację czy akcja się powiodła
  currentRequests: Array<PermissionModel> = [];
  userId: string;
  permissions: Array<string> = [];
  newPermission = new PermissionModel();
  constructor(private userRequestService: UserRequestService, private addPermissionService: AddPermissionService) { }

  ngOnInit() {
    this.getUserPermissionRequests();
    // 5. pobrać listę dostępnych serwerów
    this.addPermissionService.getAvailablePermissions().subscribe((permissions) => {
      this.permissions = permissions;
    })
  }

  getUserPermissionRequests() {
    this.userRequestService.getCurrentRequests().subscribe((permissions) => {
      this.currentRequests = permissions;
    });
  }

  remove(id) {
    this.userRequestService.remove(id).subscribe(() => {
      this.getUserPermissionRequests();
    });
  }

  add() {
    this.addPermissionService.add(this.newPermission).subscribe((servers) => {
      this.newPermission = new PermissionModel();
      this.getUserPermissionRequests();
    });

  }
}
