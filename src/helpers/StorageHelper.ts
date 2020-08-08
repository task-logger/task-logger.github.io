export const getObj = (key: string) => {
	return JSON.parse(localStorage.getItem(key));
};

export const setObj = (key: string, obj: object) => {
	localStorage.setItem(key, JSON.stringify(obj));
};
