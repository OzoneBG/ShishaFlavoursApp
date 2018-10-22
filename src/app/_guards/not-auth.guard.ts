import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable()
export class NotAuthGuard implements CanActivate {
    constructor(private router: Router, private authSerivce: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authSerivce.isAuthenticated()) {
            this.router.navigate(['/combinations'], { queryParams: { returnUrl: state.url }});
            return false;
        } else {
            return true;
        }
    }
}