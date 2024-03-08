const localStoragePrefix = 'native-federation-override:';

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
