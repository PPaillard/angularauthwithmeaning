import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "angular-meanstack-authentication"
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
}
