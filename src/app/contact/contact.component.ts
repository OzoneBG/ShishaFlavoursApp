import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'contact',
    template: 'Contact Component Hi <br /> <h1>{{isAuthenticated}}</h1>'
})

export class ContactComponent {
    isAuthenticated = false;

    constructor(private authService: AuthenticationService) {
        this.isAuthenticated = authService.isAuthenticated();
    }


 }