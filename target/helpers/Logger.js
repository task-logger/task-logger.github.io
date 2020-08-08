import { getObj, setObj } from "./StorageHelper";
import { Store } from "../store/Store";
export const startTask = (taskName) => {
    const currentTasks = getObj("tasks") || [];
    const newTasks = [
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
//# sourceMappingURL=Logger.js.map