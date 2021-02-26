import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  // Your route here:
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

