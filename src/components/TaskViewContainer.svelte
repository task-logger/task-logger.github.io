<script lang="ts">
	import { onDestroy } from "svelte";
	import { Store } from "../store/Store";
	import TaskView from "./TaskView.svelte";

	const { Tasks } = Store;

	let allTasks, taskNames, current;
	const unsubscribe = Tasks.subscribe(newValue => {
		allTasks = newValue;
		taskNames = Object.keys(allTasks.tasks);
		current = allTasks.current;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>
{#if allTasks && taskNames.length > 0}
	<table class="tasks-container">
		<thead>
			<tr>
				<th>Task name</th>
				<th>Worked Time (hh:mm:ss)</th>
			</tr>
		</thead>
		<tbody>
			{#each taskNames as taskName}
				<TaskView works={allTasks.tasks[taskName]} taskName={taskName}/>
			{/each}
		</tbody>
	</table>
{:else}
	<div>There is no available task!</div>
{/if}

<style>
	.tasks-container {
		width: 100%;
	}
	th {
		width: 50%;
	}
</style>
