import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { UserLoginModel } from "./user-login.model";
import { Subject } from "rxjs/Subject";

import { Base } from "../../environments/base";
import { RoleModel } from "../base-form-module/user-form/role.model";
@Injectable()
export class LoginService {
    baseUri = Base.baseUri;
    private currentLoginUser: UserLoginModel;
    constructor(private http: HttpClient) {

    }

    logInUser(login: string, password: string): Observable<Array<UserLoginModel>> {
        let params = new HttpParams();
        params = params.append('user', login);
        params = params.append('password', password);
        return this.http.get<Array<UserLoginModel>>(`${this.baseUri}/users`, { params: params });
    }
 
    getUserBy(id: string): Observable<UserLoginModel> {
        return this.http.get<UserLoginModel>(`${this.baseUri}/users/${id}`);
    }

    changeLoging(user: UserLoginModel, isLogin: boolean) {
        user.isLogin = isLogin;
        return this.http.put<any>(`${this.baseUri}/users/${user.id}`, user);
    }
 
    isUserLogIn(id: string): Observable<UserLoginModel> {
        return this.http.get<any>(`${this.baseUri}/users/${id}`);
    }

    setCurrentLoginUser(user: UserLoginModel): void {
        this.currentLoginUser = user;
    }

    getCurrentLoginUser(): UserLoginModel {
        return this.currentLoginUser;
    }

    getUserRoles(login: string): Observable<Array<RoleModel>> {
        let params = new HttpParams();
        params = params.append('login', login);
        return this.http.get<Array<RoleModel>>(`${this.baseUri}/roles`, { params: params });
    }

}