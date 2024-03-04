export function hasImportMapOverrides(): boolean {
  const keys = Object.keys(localStorage);
  return keys.some((key) => key.startsWith('import-map-override:'));
}

export function getImportMapOverride(importMapKey: string): string | undefined {
  // @ts-ignore
  const imports = window?.importMapOverrides?.getOverrideMap()?.imports;
  return imports && imports[importMapKey];
}
