import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Component({
    selector: 'profile-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent {
    
    username: any;

    constructor(private authService: AuthenticationService, private router: Router, private cookies: CookieService) {
        let jsonData = cookies.get(environment.userRepo);
        let data = JSON.parse(jsonData);
        this.username = data.username;
        
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/dashboard']);
    }

    deleteMyData() {
        alert('Not implemented. Will delete your personal data and logout');
    }

    empty() {

    }
}
