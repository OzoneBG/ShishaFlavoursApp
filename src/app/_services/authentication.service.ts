import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private cookies: CookieService) {}

    async login(username: string, password: string) {
        let url: string = environment.apiEndpoint + environment.apiSuffix + 'users/login';
        
        let body = {
            Username: username,
            Password: password
        };
        
        let success: any = await this.performAuthentication(url, body);
        return success;
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

    private performAuthentication(url: any, body: any) {
        return new Promise((resolve,reject)=>{
            this.http.post<any>(url, body).subscribe(
                response => {
                    if(response.user && response.token) {
                        let currentUser = {
                            id: response.user.id,
                            username: response.user.userName,
                            token: response.token
                        };
                        this.cookies.set(environment.userRepo, JSON.stringify(currentUser));
                        resolve(true);
                    }
                    resolve(false);
                },
                err => {
                    reject();
                }
            ),
             (err)=> {
               resolve(false);
           };
     });
    }
}