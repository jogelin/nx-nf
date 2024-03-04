import { initFederation } from '@angular-architects/native-federation';
import { initFederationOverrides } from '@nx-nf/native-federation-overrides';

initFederation('/assets/federation.manifest.json')
  .then(() => initFederationOverrides())
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
