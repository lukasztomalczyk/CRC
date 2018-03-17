import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from '@angular/common/http';

import { WrapperRequestService } from "../../wrapper.request.service";
import { PermissionModel } from "../../user-action-module/user-requests/permission.model";
import { RequestModel, ProvisionedPermissionstModel } from "./request.model";

@Injectable()
export class RequestsService {

    constructor(private http: HttpClient, private wrapperRequestService: WrapperRequestService) { }

    getRequests(): Observable<Array<RequestModel>> {
        return this.http.get<Array<RequestModel>>(`http://localhost:3000/requestes`);
    }

    approve(requestedPermission: RequestModel) {
        let request = this.wrapperRequestService.approve(requestedPermission);
        return this.http.put<string>(`http://localhost:3000/requestes/${request.id}`, requestedPermission);
    }

    reject(requestedPermission: RequestModel) {
        let request = this.wrapperRequestService.reject(requestedPermission);
        return this.http.put<string>(`http://localhost:3000/requestes/${request.id}`, requestedPermission);
    }

    provisionRequest(request: RequestModel) {
        let provisionRequest = new ProvisionedPermissionstModel(request);
        return this.http.post<any>(`http://localhost:3000/provisioned/`, provisionRequest.provisionRequst);
    }
}