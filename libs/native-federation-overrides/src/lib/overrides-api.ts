const overridesActivationLocalStorageKey = 'devtool';
const localStoragePrefix = 'native-federation-override:';

export function overridesActivated(): boolean {
  return localStorage.getItem(overridesActivationLocalStorageKey) === 'true';
}

export function loadNativeFederationOverridesFromStorage(): Record<string, string> {
  return Object.entries(localStorage).reduce((overrides, [key, url]) => {
    return {
      ...overrides,
      ...(key.startsWith(localStoragePrefix) && {
        [key.replace(localStoragePrefix, '')]: url,
      }),
    };
  }, {});
}
