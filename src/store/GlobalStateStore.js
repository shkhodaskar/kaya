class GlobalStateStore {
    isInstalled = false;
}

let store;

export function getInstance() {
    if (!store) store = new GlobalStateStore();
    return store;
}