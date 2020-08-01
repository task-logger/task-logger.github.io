<script>
	import { setObj } from "../helper/localStorage";
	import { getObj } from "../helper/localStorage";
	import { tasks_store } from "../store/store";

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

	function handleClear() {
		setObj("tasks", []);
		tasks_store.update(() => []);
	}
</script>

<input
	type="text"
	placeholder="Start task"
	bind:value={task}
	on:keypress={handleKeypress}
/>
<button
	on:click={handleClear}
>
	Clear
</button>

<style>
	input {
		width: 80%;
	}
</style>
