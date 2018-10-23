import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    isAuthenticated = false;

    constructor(private authService: AuthenticationService) {
        this.isAuthenticated = authService.isAuthenticated();
    }


 }