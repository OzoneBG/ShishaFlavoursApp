import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent {
  constructor(private authService: AuthenticationService) {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
