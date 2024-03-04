import { loadRemoteModule } from '@angular-architects/native-federation';
import { getImportMapOverride } from './import-map-overrides-api.utils';

declare function importShim<T>(url: string): T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loadRemoteOverrideUtils<T = any>(
  remoteName: string,
  exposedModule: string
): Promise<T> {
  const remoteKey = `${remoteName}/${exposedModule}`;

  const importMapOverrideUrl = getImportMapOverride(remoteKey);

  // If override found for remoteKey, load it separately
  // Else, use the default function
  return importMapOverrideUrl
    ? importShim<T>(importMapOverrideUrl)
    : loadRemoteModule(remoteName, exposedModule);
}
