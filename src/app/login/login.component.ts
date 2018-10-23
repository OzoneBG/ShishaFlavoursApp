import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private authService: AuthenticationService, private router: Router) {}

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    onSubmit() {
        let inputModel = this.loginForm.value;
        let success = this.authService.login(inputModel.username, inputModel.password);
        if(success) {
            this.router.navigate(['/contact']);
        } else {
            console.log('Not logged in');
        }
    }
}