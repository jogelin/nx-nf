import { initFederation } from '@angular-architects/native-federation';
import { processImportMapOverride } from './import-map-override.utils';

initFederation('/assets/federation.manifest.json')
  .then((importMap) => {
    processImportMapOverride();
    return importMap;
  })
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
