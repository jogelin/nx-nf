import { hasImportMapOverrides } from './import-map-overrides-api.utils';

export function initImportMapOverride() {
  // Process only if contains overrides
  if (hasImportMapOverrides()) {
    moveNFImportMapToHead();
    injectImportMapOverrideLibrary();
  }
}

/**
 * Move import maps injected by native federation from the bottom body to head
 * It is required to have the importmap before the
 */
function moveNFImportMapToHead() {
  const importMapElem = document.body.querySelector(
    'script[type="importmap-shim"]'
  );
  if (importMapElem) {
    document.head.appendChild(importMapElem);
  }
}

/**
 * Add importmap override library to the dom
 */
function injectImportMapOverrideLibrary() {
  document.head.appendChild(
    Object.assign(document.createElement('script'), {
      type: 'text/javascript',
      src: 'https://cdn.jsdelivr.net/npm/import-map-overrides/dist/import-map-overrides.js',
    })
  );
}
