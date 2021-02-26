import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  value = false;
  constructor(private router: Router) {
  }

  public isAuthorized(): boolean {
    return this.value;
  }

  public setAuthorized(value: boolean): void {
    this.value = value;
    const i = this.router.config.findIndex(x => x.path === 'flights');
    this.router.config.splice(i, 1);
    this.router.config.push(
      { path: '', loadChildren: () => import('./login.module').then(mod => mod.LoginModule) }
    );
  }
}
