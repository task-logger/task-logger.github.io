import { writable } from 'svelte/store';
export var Store;
(function (Store) {
    Store.Tasks = writable([]);
})(Store || (Store = {}));
//# sourceMappingURL=Store.js.map