import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_services';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    errors: string[] = new Array(0);

    constructor(private userService: UserService) {

    }

    registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        passwordRepeat: new FormControl('', Validators.required),
        iConsent: new FormControl('')
    });

    onSubmit() {
        this.errors = new Array(0);
        let inputModel = this.registerForm.value;
        let validated: boolean = this.performValidation(inputModel);
        if(validated) {
            this.userService.signup(inputModel.email, inputModel.username, inputModel.password, inputModel.iConsent);
        }
    }

    private performValidation(inputModel: any): boolean {
        let isValidated = true;

        if(!inputModel.iConsent) {
            this.errors.push("You are not consent.");
            isValidated = false;
        }

        if(!(inputModel.password === inputModel.passwordRepeat)) {
            this.errors.push("The passwords do not match.");
            isValidated = false;
        }

        return isValidated;
    }

}