import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(({ AppComponent }) => AppComponent),
  },
];
