export const getDayString = (date: Date | number) => {
	if (typeof date === "number") {
		date = new Date(date);
	}
	return `${pad2(date.getDate())}-${pad2(date.getMonth())}-${pad2(date.getFullYear())}`
}

const pad2 = (num: number) => (num % 100).toString().padStart(2, "0");
