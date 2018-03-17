import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserRequestService {

    constructor(private http: HttpClient) {

    }

    getServers(): Observable<Array<String>> {
        return this.http.get<Array<String>>(`http://localhost:3000/servers`);
    }
}