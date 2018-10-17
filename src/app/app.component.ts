import { Component } from '@angular/core';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShishaFlavoursApp';

  constructor(private authService: AuthenticationService) {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
