import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(public authService: AuthService) { }

  goToHome() {
    this.authService.setLogin(true);
  }

}

