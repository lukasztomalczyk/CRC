import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../environments/environment";
import { ActivatedRoute, Params } from "@angular/router";

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    getWithUser(url: string, options?: RequestOptionsArgs) {
        return this.getUserBy("").map(()=>{
            return super.get(url, "");
        })
    }

    getUserBy(id: string) {
        return super.get(`http://localhost:3000/users/${id}`);
    }
    
}