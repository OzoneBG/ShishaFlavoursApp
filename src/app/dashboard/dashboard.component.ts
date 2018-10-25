import { Component } from '@angular/core';
import { FlavourCombinationStats, AuthenticationService } from '../_services';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    flavours: Array<any> = new Array(0);

    constructor(private flavoursStats: FlavourCombinationStats, private authService: AuthenticationService) {
      this.getTopTenCombos();
    }
 
    getTopTenCombos() {
        this.flavoursStats.getTopTenCombos()
        .subscribe(
            response => {
                this.flavours.push(response);
            }
        );
    }

    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}
