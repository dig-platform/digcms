import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.routes').then(r => r.ROUTES)
  },
  // ... other application routes that don't
  //     have access to ADMIN_API_KEY or AdminService.
];
