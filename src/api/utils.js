export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

export const getName = list => {
    let str = "";
    list.map((item, index) => {
        str += index === 0 ? item.name : "/" + item.name;
        return item;
    })
}
