<script lang="ts">
	import Input from "./Input.svelte";
	import Container from "./Container.svelte";
	import TaskViewContainer from "./TaskViewContainer.svelte";
	import { formatDate } from "../helpers/DateTimeHelper";
</script>

<Container>
	<h2>{formatDate(new Date())}</h2>
	<Input/>
	<hr/>

	<TaskViewContainer/>
</Container>

<style>
	h2 {
		color: #ff0000;
	}
</style>
