import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log("To be implemented");
    }

    isAuthenticated(): boolean {
        let user = localStorage.getItem(environment.userRepo);

        if(user) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem(environment.userRepo);
    }
}