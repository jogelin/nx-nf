import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule('mfHome', './routes').then(({ appRoutes }) => appRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('mfLogin', './routes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      loadRemoteModule('mfAccount', './routes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
];
