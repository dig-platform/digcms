import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home.component')
  },
  {
    path: 'account/sign-up',
    loadComponent: () => import('./pages/account/sign-up.component')
  },
  // ... other application routes that don't
  //     have access to ADMIN_API_KEY or AdminService.
];
