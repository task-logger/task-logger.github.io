export const getObj = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
export const setObj = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};
//# sourceMappingURL=StorageHelper.js.map