import type { ITask } from "./Task";
import type { BREAK } from "../constants/Constants";

export interface IBreak extends ITask {
	name: typeof BREAK;
}
