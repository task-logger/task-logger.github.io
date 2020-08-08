export const getDayString = (date) => {
    if (typeof date === "number") {
        date = new Date(date);
    }
    return `${pad2(date.getDate())}-${pad2(date.getMonth())}-${pad2(date.getFullYear())}`;
};
const pad2 = (num) => (num % 100).toString().padStart(2, "0");
//# sourceMappingURL=DateTimeHelper.js.map