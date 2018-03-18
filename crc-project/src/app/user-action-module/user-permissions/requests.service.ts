import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from '@angular/common/http';

import { WrapperRequestService } from "../../wrapper.request.service";
import { PermissionModel } from "../../user-action-module/user-requests/permission.model";


@Injectable()
export class RequestsService {

    constructor(private http: HttpClient, private wrapperService: WrapperRequestService) { }

    getPermissions(){
        
        let currentLogInUser = this.wrapperService.getCurrentUser();
        let params = new HttpParams();
        params = params.append('userName', currentLogInUser.login);
        return this.http.get<any>(`http://localhost:3000/provisioned`,{params:params});
    }

}