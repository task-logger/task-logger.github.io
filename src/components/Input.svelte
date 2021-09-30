<script lang="ts">
	import ClearButton from "./ClearButton.svelte";
	import { Store } from "../store/Store";

	let task = "";
	const { Tasks } = Store;

	function handleKeypress(event) {
		if (event.key === "Enter") {
			Tasks.add(task);
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
