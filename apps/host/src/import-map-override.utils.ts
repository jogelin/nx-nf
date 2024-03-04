// @ts-nocheck
export function processImportMapOverride() {
  // Process only if contains overrides
  if (!containsImportMapOverrideKey()) {
    return;
  }

  moveNFImportMapToHead();
  refreshNFRemoteCacheOnImportMapOverride();
  injectImportMapOverrideLibrary();
}

/**
 * Check if the localstorage contains importmaps from
 */
function containsImportMapOverrideKey() {
  const keys = Object.keys(localStorage);
  return keys.some((key) => key.startsWith('import-map-override:'));
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
 * Because NF keep importmap in cache, refresh if import map was injected
 */
function refreshNFRemoteCacheOnImportMapOverride() {
  new MutationObserver((mutations) => {
    for (const { addedNodes, type } of mutations) {
      if (type !== 'childList') continue;
      for (const node of addedNodes) {
        if (node.tagName === 'SCRIPT') {
          if (node.type === 'importmap-shim' || node.type === 'importmap') {
            const remoteNamesToRemote =
              window['__NATIVE_FEDERATION__'].remoteNamesToRemote;
            console.log(remoteNamesToRemote);

            // TODO: should update the remoteNamesToRemote by changing the base url
            console.log(node);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
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
