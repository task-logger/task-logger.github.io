import { ITaskInterval } from "../types/Task";

export const getDayString = (date: Date | number) => {
	if (typeof date === "number") {
		date = new Date(date);
	}
	return `${pad2(date.getDate())}-${pad2(date.getMonth())}-${pad2(date.getFullYear())}`;
};

const formatter = new Intl.DateTimeFormat("en-GB");

export const formatDate = (date: Date) => {
	return formatter.format(date);
};

const pad2 = (num: number) => (num % 100).toString().padStart(2, "0");

export const getTimeStringFromNumber = (time: number): string => {
	time /= 1000;
	const hours = Math.floor(time / (60 * 60));
	time %= 60 * 60;
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
};

export const getTimeDiff = ({ start, end }: ITaskInterval): number => {
	if (end) {
		return end - start;
	}
	return Date.now() - start;
};

export const getTotalWorkingTime = (works: ITaskInterval[]): number => {
	return works.reduce((total, interval) => {
		total += getTimeDiff(interval);
		return total;
	}, 0);
};

export const getTotalWorkingTimeStr = (works: ITaskInterval[]): string => {
	return getTimeStringFromNumber(getTotalWorkingTime(works));
};
