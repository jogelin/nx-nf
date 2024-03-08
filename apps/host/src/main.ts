import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/federation.manifest.json')
  .then(async (importmap) => {
    console.log(importmap);
    /**
     * import('native-federation-overrides') cannot be part of the static imports because it will be resolved by es-module-shims and the importmap is not injected yet.
     * initFederation injects the importmap so it has to be after
     */
    const { initFederationOverrides } = await import('native-federation-overrides');
    return initFederationOverrides();
  })
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
