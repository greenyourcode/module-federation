import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, ROUTES } from '@angular/router';
import { AuthService } from './auth.service';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: configBookHandlerRoutes,
      deps: [AuthService],
      multi: true
    }
  ],
})
export class LoginModule { }

export function configBookHandlerRoutes(authService: AuthService) {
  let routes: Routes = [];
  if (authService.isAuthorized()) {
    routes = [
      {
        path: 'flights',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe1',
            exposedModule: './Module'
          })
            .then(m => m.FlightsModule)
      }
    ];
  } else {
    routes = [
      {
        path: 'flights',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'mfe2',
            exposedModule: './Module'
          })
            .then(m => m.FlightsModule)
      }
    ];
  }
  return routes;
}