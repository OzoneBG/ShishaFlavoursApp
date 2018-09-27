import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'combinations',
    template: `Combination Component Hi <br /> {{endpoint}}`
})
export class CombinationComponent {
    endpoint: string = environment.apiEndpoint;
 }