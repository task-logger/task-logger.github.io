import { writable } from 'svelte/store';

export namespace Store {
	export const Tasks = writable([]);
}
