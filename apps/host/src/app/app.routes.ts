import { Route } from '@angular/router';
import { loadRemoteOverrideUtils } from '@nx-nf/nf-utils';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteOverrideUtils('mfHome', 'mfRoutes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteOverrideUtils('mfLogin', 'mfRoutes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      loadRemoteOverrideUtils('mfAccount', 'mfRoutes').then(
        ({ appRoutes }) => appRoutes
      ),
  },
];
