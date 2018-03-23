import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserRequestService } from './user-requests/user-requests.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RequestsService } from './user-permissions/requests.service';
import { AddPermissionService } from './user-requests/permission-request.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [UserPermissionsComponent, UserRequestsComponent],
  exports: [UserPermissionsComponent, UserRequestsComponent],
  providers: [UserRequestService, AddPermissionService, RequestsService]
})
export class UserActionModuleModule { }
