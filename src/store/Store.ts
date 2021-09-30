import { derived, writable } from "svelte/store";
import { ITasks } from "../types/Task";
import { getObj, setObj } from "../helpers/StorageHelper";
import { StorageKeys } from "../constants/Constants";

export namespace Store {
	const createTasksStore = () => {
		const { subscribe, update, set } = writable<ITasks>(getObj(StorageKeys.TASKS) || { tasks: {} });
		return {
			subscribe,
			clear: () => {
				const defaultValue = { tasks: {} };
				setObj(StorageKeys.TASKS, defaultValue);
				set(defaultValue);
			},
			add: (newTaskName: string) => {
				update(currentTasks => {
					newTaskName = newTaskName.trim();
					const { current, tasks } = currentTasks;
					if (newTaskName === current) {
						return currentTasks;
					}

					const currentTime = Date.now();

					const currentTask = tasks[current];
					if (currentTask) {
						currentTask[currentTask.length - 1].end = currentTime;
					}

					const newTasks: ITasks = {
						current: newTaskName,
						tasks: {
							...currentTasks.tasks,
							[newTaskName]: [
								...tasks[newTaskName] || [],
								{ start: currentTime }
							]
						}
					}
					setObj(StorageKeys.TASKS, newTasks);
					return newTasks;
				});
			}
		};
	};
	export const Tasks = createTasksStore();

	export const currentTask = derived(Tasks, $Tasks => $Tasks.current);
}
