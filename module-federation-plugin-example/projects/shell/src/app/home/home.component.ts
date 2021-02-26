import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

  onChange() {
    if (this.authService.isAuthorized() === true) {
      this.authService.setAuthorized(false);
    } else {
      this.authService.setAuthorized(true);
    }
  }
}
