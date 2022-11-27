import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./demo.component')
  },
  {
    path: 'editor',
    loadComponent: () => import('./editor/editor.component')
  },
];
