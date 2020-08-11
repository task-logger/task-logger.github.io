<script context="module">
	let running;
</script>

<script lang="ts">
	import { getTotalWorkingTimeStr } from "../helpers/DateTimeHelper";
	import { afterUpdate } from "svelte"

	export let works;
	export let taskName;
	export let isCurrent;

	let workedTime = getTotalWorkingTimeStr(works);
	let clockInterval = 0;

	const clearRunningInterval = () => {
		clearInterval(running);
		running = clockInterval;
	}

	clockInterval = isCurrent && setInterval(() => {
		workedTime = getTotalWorkingTimeStr(works);
		console.log(workedTime);
		if (running && running !== clockInterval) {
			clearRunningInterval();
		}
	}, 1000);
	running = clockInterval;

	afterUpdate(() => {
		if (isCurrent && running !== clockInterval) {
			clearRunningInterval();
			clockInterval = isCurrent && setInterval(() => {
				workedTime = getTotalWorkingTimeStr(works);
				console.log(workedTime);
				if (running && running !== clockInterval) {
					clearRunningInterval();
				}
			}, 1000);
		}
	})
</script>

<tr class:current={isCurrent}>
	<td>{taskName}</td>
	<td>{workedTime}</td>
</tr>

<style>
	.current {
		color: white;
		background-color: green;
	}
</style>

