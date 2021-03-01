import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public authService: AuthService) { }

  onConnect() {
    if (this.authService.isAuthorized() === true) {
      this.authService.setAuthorized(false);
    } else {
      this.authService.setAuthorized(true);
    }
  }

  public onChangeAnswer(change: MatRadioChange): void {
    this.authService.setApp(change.value);
  }
}
