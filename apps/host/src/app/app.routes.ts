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
      loadRemoteModule('mfHome', 'mfRoutes').then(({ appRoutes }) => appRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('mfLogin', 'mfRoutes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      loadRemoteModule('mfAccount', 'mfRoutes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
];
