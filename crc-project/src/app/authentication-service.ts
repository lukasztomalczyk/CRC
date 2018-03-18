import { LoginService } from "./login/login.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class Permissions {
    canActivate(id: string, loginSerivce: LoginService, router: Router) {
        return loginSerivce.isUserLogIn(id).map(user => {
            if (user.isLogin) {
                return true;
            }
            else {
                router.navigate(['/login']);
                return false
            }
        });
    }
}

@Injectable()
export class CanActivateUser implements CanActivate {
    constructor(private permissions: Permissions, private loginService: LoginService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,

    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.permissions.canActivate(route.params.userId, this.loginService, this.router);
    }
}