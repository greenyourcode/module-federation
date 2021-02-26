import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthService) { }

  onChange() {
    this.authService.setAuthorized(Math.random() >= 0.5);
  }

  public get isManager$() {
    return this.authService.authorized$;
  }
}

