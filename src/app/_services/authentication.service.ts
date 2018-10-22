import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private cookies: CookieService) {}

    login(username: string, password: string){
        let url: string = environment.apiEndpoint + environment.apiSuffix + 'users/login';
        
        let body = {
            Username: username,
            Password: password
        };

        this.http.post<any>(url, body)
        .subscribe(
            response => {
                if(response.user && response.token) {
                    let currentUser = {
                        id: response.user.id,
                        username: response.user.userName,
                        token: response.token
                    };
                    this.cookies.set(environment.userRepo, JSON.stringify(currentUser));
                }
            },
            err => console.log(err)
        );
    }

    isAuthenticated(): boolean {
        let user = this.cookies.get(environment.userRepo);

        if(user) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        this.cookies.delete(environment.userRepo);
    }
}