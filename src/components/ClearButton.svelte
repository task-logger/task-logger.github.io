<script lang="ts">
	import { setObj } from "../helpers/StorageHelper";
	import { Store } from "../store/Store";

	const handleClear = () => {
		setObj("tasks", []);
		Store.Tasks.update(() => []);
	}
</script>

<button
		on:click={handleClear}
>
	Clear
</button>
