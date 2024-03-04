import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/federation.manifest.json')
  .then(async (importMap) => {
    // Cannot use static import to load @nx-nf/nf-utils before the importmap is injected by initFederation
    (await import('@nx-nf/nf-utils')).initImportMapOverride();
    return importMap;
  })
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
