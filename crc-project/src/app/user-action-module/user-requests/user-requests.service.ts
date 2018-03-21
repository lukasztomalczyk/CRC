import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from '@angular/common/http';
import { PermissionModel } from "./permission.model";
import { WrapperRequestService } from "../../wrapper.request.service";
import { Base } from "../../../environments/base";

@Injectable()
export class UserRequestService {
    baseUri = Base.baseUri;
    constructor(private http: HttpClient, private wrapperRequestService: WrapperRequestService) { }

    getCurrentRequests(): Observable<Array<PermissionModel>> {
        let currentLogInUser = this.wrapperRequestService.getCurrentUser();
        let params = new HttpParams();
        params = params.append('login', currentLogInUser.login);
        return this.http.get<Array<PermissionModel>>(`${this.baseUri}/requestes`, { params: params });
    }

    remove(id: string) {
        return this.http.delete<string>(`${this.baseUri}/requestes/${id}`);
    }
}