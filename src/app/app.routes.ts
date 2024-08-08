// Angular
import { Routes } from '@angular/router';
// Layouts
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/home/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.routes').then((m) => m.AUTH_ROUTES),
        canActivate: [],
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./modules/signup/signup-page/signup-page.component').then(
            (m) => m.SignupPageComponent
          ),
      },
    ],
  },
];
