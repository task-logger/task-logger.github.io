<script lang="ts">
	import Input from "./Input.svelte";
	import Container from "./Container.svelte";
	import TaskViewContainer from "./TaskViewContainer.svelte";

</script>

<Container>
	<h2>Task Logger</h2>
	<Input/>
	<hr/>

	<TaskViewContainer/>
</Container>

<style>
	h2 {
		color: #ff0000;
	}
</style>
