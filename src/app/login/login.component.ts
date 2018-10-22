import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authService: AuthenticationService) {}

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    onSubmit() {
        let inputModel = this.loginForm.value;
        this.authService.login(inputModel.username, inputModel.password);
        if(this.authService.isAuthenticated()) {
            console.log('Authenticated');
            //if successfull redirect
        }
    }
}