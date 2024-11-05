// Angular
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
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
    ],
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./shared/layouts/simple-layout/simple-layout.component').then(
        (m) => m.SimpleLayoutComponent
      ),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/checkout/checkout.routes').then(
            (m) => m.CHECKOUT_ROUTES
          ),
      },
    ],
  },
];
