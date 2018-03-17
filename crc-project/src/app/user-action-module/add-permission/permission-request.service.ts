import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { PermissionModel } from "../user-requests/permission.model";
import { LoginService } from "../../login/login.service";
import { WrapperRequestService } from "../../wrapper.request.service";

@Injectable()
export class AddPermissionService {

    constructor(private http: HttpClient, private wrapperService: WrapperRequestService) {

    }

    getServers(): Observable<Array<string>> {
        return this.http.get<Array<string>>(`http://localhost:3000/servers`);
    }

    getAvailablePermissions(): Observable<Array<string>> {
        return this.http.get<Array<string>>(`http://localhost:3000/permissions`);
    }

    add(request: PermissionModel) {

        let wrappedRequest = this.wrapperService.permission(request);
        return this.http.post<PermissionModel>(`http://localhost:3000/requestes/`, wrappedRequest);
    }

}