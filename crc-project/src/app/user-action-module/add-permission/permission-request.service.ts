import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { PermissionModel } from "../user-requests/permission.model";
@Injectable()
export class AddPermissionService {

    constructor(private http: HttpClient) {

    }

    getServers(): Observable<Array<String>> {
        return this.http.get<Array<String>>(`http://localhost:3000/servers`);
    }

    add(request: PermissionModel) {
        return this.http.post<PermissionModel>(`http://localhost:3000/requestes/`, request);
    }

}