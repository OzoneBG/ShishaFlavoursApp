import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'combinations',
    template: `Combination Component Hi <br /> You tried to access {{returnUrl}} but were not authenticated`
})
export class CombinationComponent {
    returnUrl = "";

    constructor(private route: ActivatedRoute) {
        route.queryParams.subscribe(params => {
            this.returnUrl = params['returnUrl'];
        });
    }
 }