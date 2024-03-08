import { processRemoteInfo } from '@angular-architects/native-federation';
import { ImportMap } from './import-map.type';
import { loadNativeFederationOverridesFromStorage } from './overrides-api';

const localStorageDevTool = 'native-federation-override:';

export function initFederationOverrides(): Promise<ImportMap[]> {
  const overrides = loadNativeFederationOverridesFromStorage();
  const processRemoteInfoPromises = Object.entries(overrides).map(([remoteName, url]) => processRemoteInfo(url, remoteName));

  return Promise.all(processRemoteInfoPromises);
}
