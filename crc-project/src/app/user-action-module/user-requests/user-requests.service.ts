import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from '@angular/common/http';
import { PermissionModel } from "./permission.model";
import { WrapperRequestService } from "../../wrapper.request.service";

@Injectable()
export class UserRequestService {

    constructor(private http: HttpClient, private wrapperRequestService: WrapperRequestService) { }

    getPermissionRequests(currentLogin: string): Observable<Array<PermissionModel>> {
        let params = new HttpParams();
        params = params.append('userName', currentLogin);
        return this.http.get<Array<PermissionModel>>(`http://localhost:3000/requestes`, { params: params });
    }

    remove(id: string) {
        return this.http.delete<string>(`http://localhost:3000/requestes/${id}`);
    }
}