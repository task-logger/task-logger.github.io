<script>
	import Input from "./Input.svelte";
	import Container from "./Container.svelte";
	import { onMount, onDestroy } from "svelte";
	import { getObj } from "../helper/localStorage";
	import { tasks_store } from "../store/store";

	let tasks;
	const unsubscribe = tasks_store.subscribe(newValue => {
		tasks = newValue;
	});

	// TODO Load initial tasks
	onMount(() => {
		tasks = getObj("tasks");
	});
	onDestroy(() => {
		unsubscribe();
	});
</script>

<Container>
	<h2>Task Logger</h2>
	<Input/>
	<hr/>

	{#if tasks && tasks.length}
		{#each tasks as task}
			<div>{task}</div>
		{/each}
		{:else}
		<div>There is no available task!</div>
	{/if}
</Container>

<style>
	h2 {
		color: #ff0000;
	}
</style>
