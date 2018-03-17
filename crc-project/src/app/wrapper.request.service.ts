import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { LoginService } from "./login/login.service";
import { PermissionModel } from "./user-action-module/user-requests/permission.model";
import { Subject } from "rxjs";

@Injectable()
export class WrapperRequestService {
    logedUser = new Subject<any>();
    constructor(private http: HttpClient, private loginService: LoginService) {
     
    }

    permission(request: PermissionModel) {
        request.userName = this.loginService.getCurrentLoginUser().login;
        request.status = "In progress"
        return request;
    }

}