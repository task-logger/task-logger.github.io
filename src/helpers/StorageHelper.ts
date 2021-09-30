export const getObj = <T>(key: string): T => {
	return JSON.parse(localStorage.getItem(key));
};

export const setObj = <T>(key: string, obj: T): void => {
	localStorage.setItem(key, JSON.stringify(obj));
};
