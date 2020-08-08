import { getObj, setObj } from "./StorageHelper";
import { Store } from "../store/Store";
import type { ITask } from "../types/Task";

export const startTask = (taskName: string) => {
	const currentTasks = getObj("tasks") || [];
	const newTasks: ITask[] = [
		...currentTasks,
		{
			name: taskName,
			start: Date.now()
		}
	];
	setObj("tasks", newTasks);
	Store.Tasks.update(() => newTasks);
};

export const initTasks = () => {
	const currentTasks = getObj("tasks") || [];
};



