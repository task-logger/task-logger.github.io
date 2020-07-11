<script>
	let task = "";

	function handleKeypress(event) {
		if (event.key === "Enter") {
			// TODO Handle Enter
		}
	}
</script>

<input
	type="text"
	placeholder="Start task"
	bind:value="{task}"
	on:keypress={handleKeypress}
/>

<style>
	input {
		width: 80%;
	}
</style>
