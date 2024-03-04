import { processRemoteInfo } from '@angular-architects/native-federation';
import { ImportMap } from './import-map.type';

const NATIVE_FEDERATION_LOCAL_STORAGE_PREFIX = 'native-federation-override:';

export function initFederationOverrides(): Promise<ImportMap[]> {
  const overrides = loadNativeFederationOverridesFromStorage();
  const processRemoteInfoPromises = Object.entries(overrides).map(
    ([remoteName, url]) => processRemoteInfo(url, remoteName)
  );

  return Promise.all(processRemoteInfoPromises);
}

function loadNativeFederationOverridesFromStorage(): Record<string, string> {
  return Object.entries(localStorage).reduce((overrides, [key, url]) => {
    return {
      ...overrides,
      ...(key.startsWith(NATIVE_FEDERATION_LOCAL_STORAGE_PREFIX) && {
        [key.replace(NATIVE_FEDERATION_LOCAL_STORAGE_PREFIX, '')]: url,
      }),
    };
  }, {});
}
