import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    signup(email: string, username: string, password: string, iConsent: boolean) {
        console.log('Creating request with ', username, email, iConsent);
    }
}