<script lang="ts">
	import { getTotalWorkingTimeStr } from "../helpers/DateTimeHelper";
	import { afterUpdate } from "svelte";
	import { Store } from "../store/Store";

	const { currentTask } = Store;

	export let works;
	export let taskName;

	let workedTime = getTotalWorkingTimeStr(works);
	let clockInterval = 0;

	const startInterval = () => {
		clockInterval = ($currentTask === taskName) && setInterval(() => {
			workedTime = getTotalWorkingTimeStr(works);
		}, 1000);
	}
	const clearRunningInterval = () => {
		clearInterval(clockInterval);
		clockInterval = 0;
	}

	startInterval();
	afterUpdate(() => {
		if ($currentTask !== taskName) {
			clearRunningInterval();
		} else {
			if (clockInterval === 0) {
				startInterval();
			}
		}

	})
</script>

<tr class:current={$currentTask === taskName}>
	<td>{taskName}</td>
	<td>{workedTime}</td>
</tr>

<style>
	.current {
		color: white;
		background-color: green;
	}
</style>

