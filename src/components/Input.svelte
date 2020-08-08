<script lang="ts">
	import { setObj } from "../helpers/StorageHelper";
	import { getObj } from "../helpers/StorageHelper";
	import { tasks_store } from "../store/Store";
	import ClearButton from "./ClearButton.svelte";

	let task = "";

	function handleKeypress(event) {
		if (event.key === "Enter") {
			task = task.trim();
			const currentTasks = getObj("tasks") || [];
			const newTasks = [
				...currentTasks,
				task
			]
			setObj("tasks", newTasks);
			tasks_store.update(() => newTasks);
			task = "";
		}
	}
</script>

<input
	type="text"
	placeholder="Start task"
	bind:value={task}
	on:keypress={handleKeypress}
/>

<ClearButton/>

<style>
	input {
		width: 80%;
	}
</style>
