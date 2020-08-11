<script lang="ts">
	import { Store } from "../store/Store";

	const { Tasks } = Store;
</script>

<button on:click={Tasks.clear}>Clear</button>
